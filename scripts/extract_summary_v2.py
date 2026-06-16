def extract_summary(text):

    text = str(text)

    # Case 1
    act = re.search(
        r'ACT:(.*?)HEADNOTE:',
        text,
        flags=re.I | re.S
    )

    headnote = re.search(
        r'HEADNOTE:(.*?)(JUDGMENT|ORDER|APPEAL)',
        text,
        flags=re.I | re.S
    )

    if act or headnote:

        act_text = act.group(1) if act else ""
        head_text = headnote.group(1) if headnote else ""

        return (
            act_text + " " + head_text
        ).strip()

    # Case 2
    judgment = re.search(
        r'JUDGMENT(.*)',
        text,
        flags=re.I | re.S
    )

    if judgment:

        return judgment.group(1)[:2000]

    # Case 3
    return text[:2000]
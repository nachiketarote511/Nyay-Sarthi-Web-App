import {
    Link
} from "react-router-dom";

function Sidebar() {

    return (

        <div
            style={{
                width: "260px",
                background: "#111827",
                color: "white",
                padding: "20px"
            }}
        >

            <h2>

                ICJIP

            </h2>

            <hr />

            <br />

            <p>

                <Link
                    to="/"
                    style={{
                        color: "white"
                    }}
                >
                    Dashboard
                </Link>

            </p>

            <p>

                <Link
                    to="/retrieval"
                    style={{
                        color: "white"
                    }}
                >
                    Retrieval
                </Link>

            </p>

            <p>

                <Link
                    to="/classification"
                    style={{
                        color: "white"
                    }}
                >
                    Classification
                </Link>

            </p>

            <p>

                <Link
                    to="/article"
                    style={{
                        color: "white"
                    }}
                >
                    Article Prediction
                </Link>

            </p>

            <p>

                <Link
                    to="/graph"
                    style={{
                        color: "white"
                    }}
                >
                    Knowledge Graph
                </Link>

            </p>

            <p>

                <Link
                    to="/assistant"
                    style={{
                        color: "white"
                    }}
                >
                    Legal Assistant
                </Link>

            </p>

        </div>

    );

}

export default Sidebar;
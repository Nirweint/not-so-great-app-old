import React from "react";
import "./Modal.css";

export default class Modal extends React.Component {
    state = {
        isOpen: false,
    };

    render() {
        return (
            <React.Fragment>
                <button className="modal-btn" onClick={() => this.setState({ isOpen: true })}>
                    Open Modal
                </button>

                {this.state.isOpen && (
                    <div className="modal">
                        <div className="modal-body">
                            <h1>Modal</h1>
                            <p>Heloo</p>
                            <button
                                className="modal-btn"
                                onClick={() => this.setState({ isOpen: false })}
                            >
                                Close modal
                            </button>
                        </div>
                    </div>
                )}
            </React.Fragment>
        );
    }
}

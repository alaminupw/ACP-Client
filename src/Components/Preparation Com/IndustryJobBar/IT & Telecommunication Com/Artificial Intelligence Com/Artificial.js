import React from "react";
import './Artificial.css';

import { Link } from "react-router-dom";

function Artificial () {
    return(
        <div className="container py-4">
            <div className="headline">
                <h2>IT & Telecommunication</h2>
            </div>
            <div className="row">
                <div className="col-2">
                    <ul className="list-unstyled">
                        <li>
                            <Link className="sub-list" to="/">
                            <button type="button" class="btn btn-primary btn-lg">Artificial Intelligence - Section 1</button>
                            </Link>
                        </li>
                    </ul>
                    <ul className="list-unstyled">
                        <li>
                            <Link className="sub-list" to="/">
                            <button type="button" class="btn btn-primary btn-lg">Artificial Intelligence - Section 2</button>
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* 2nd row */}
                                <div className="col-2">
                    <ul className="list-unstyled">
                        <li>
                            <Link className="sub-list" to="/">
                            <button type="button" class="btn btn-primary btn-lg">Artificial Intelligence - Section 3</button>
                            </Link>
                        </li>
                    </ul>
                    <ul className="list-unstyled">
                        <li>
                            <Link className="sub-list" to="/">
                            <button type="button" class="btn btn-primary btn-lg">Artificial Intelligence - Section 4</button>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* 3rd row */}
                                <div className="col-2">
                    <ul className="list-unstyled">
                        <li>
                            <Link className="sub-list" to="/">
                            <button type="button" class="btn btn-primary btn-lg">Artificial Intelligence - Section 5</button>
                            </Link>
                        </li>
                    </ul>
                    <ul className="list-unstyled">
                        <li>
                            <Link className="sub-list" to="/">
                            <button type="button" class="btn btn-primary btn-lg">Artificial Intelligence - Section 6</button>
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* 4th row */}
                <div className="col-2">
                    <ul className="list-unstyled">
                        <li>
                            <Link className="sub-list" to="/">
                            <button type="button" class="btn btn-primary btn-lg">Artificial Intelligence - Section 7</button>
                            </Link>
                        </li>
                    </ul>
                    <ul className="list-unstyled">
                        <li>
                            <Link className="sub-list" to="/">
                            <button type="button" class="btn btn-primary btn-lg">Artificial Intelligence - Section 8</button>
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* 5th row */}
                <div className="col-2">
                    <ul className="list-unstyled">
                        <li>
                            <Link className="sub-list" to="/">
                            <button type="button" class="btn btn-primary btn-lg">Artificial Intelligence - Section 9</button>
                            </Link>
                        </li>
                    </ul>
                    <ul className="list-unstyled">
                        <li>
                            <Link className="sub-list" to="/">
                            <button type="button" class="btn btn-primary btn-lg">Artificial Intelligence - Section 10</button>
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* 6th row */}
                <div className="col-2">
                    <ul className="list-unstyled">
                        <li>
                            <Link className="sub-list" to="/">
                            <button type="button" class="btn btn-primary btn-lg">Artificial Intelligence - Section 11</button>
                            </Link>
                        </li>
                    </ul>
                    <ul className="list-unstyled">
                        <li>
                            <Link className="sub-list" to="/">
                            <button type="button" class="btn btn-primary btn-lg">Artificial Intelligence - Section 12</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Artificial;
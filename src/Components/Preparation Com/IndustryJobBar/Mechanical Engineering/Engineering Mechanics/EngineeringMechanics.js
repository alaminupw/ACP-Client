
import './EngineeringMechanics.css';
import { Link } from "react-router-dom";

function EngineeringMechanics () {
    return(
        <div className="container py-4">
            <div className="Mechanical-headline">
                <h2>Engineering Mechanics</h2>
            </div>
            <div className="row">
                <div className="col-2">
                    <ul className="list-unstyled">
                        <li>
                            <Link className="Mechanical-sub-list" to="/">
                            <button type="button" class="btn btn-primary btn-lg">Engineering Mechanics - Section 1</button>
                            </Link>
                        </li>
                    </ul>
                    <ul className="list-unstyled">
                        <li>
                            <Link className="Mechanical-sub-list" to="/">
                            <button type="button" class="btn btn-primary btn-lg">Engineering Mechanics - Section 2</button>
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* 2nd row */}
                                <div className="col-2">
                    <ul className="list-unstyled">
                        <li>
                            <Link className="Mechanical-sub-list" to="/">
                            <button type="button" class="btn btn-primary btn-lg">Engineering Mechanics - Section 3</button>
                            </Link>
                        </li>
                    </ul>
                    <ul className="list-unstyled">
                        <li>
                            <Link className="Mechanical-sub-list" to="/">
                            <button type="button" class="btn btn-primary btn-lg">Engineering Mechanics - Section 4</button>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* 3rd row */}
                                <div className="col-2">
                    <ul className="list-unstyled">
                        <li>
                            <Link className="Mechanical-sub-list" to="/">
                            <button type="button" class="btn btn-primary btn-lg">Engineering Mechanics - Section 5</button>
                            </Link>
                        </li>
                    </ul>
                    <ul className="list-unstyled">
                        <li>
                            <Link className="Mechanical-sub-list" to="/">
                            <button type="button" class="btn btn-primary btn-lg">Engineering Mechanics - Section 6</button>
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* 4th row */}
                <div className="col-2">
                    <ul className="list-unstyled">
                        <li>
                            <Link className="Mechanical-sub-list" to="/">
                            <button type="button" class="btn btn-primary btn-lg">Engineering Mechanics - Section 7</button>
                            </Link>
                        </li>
                    </ul>
                    <ul className="list-unstyled">
                        <li>
                            <Link className="sub-list" to="/">
                            <button type="button" class="btn btn-primary btn-lg">Engineering Mechanics - Section 8</button>
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* 5th row */}
                <div className="col-2">
                    <ul className="list-unstyled">
                        <li>
                            <Link className="Mechanical-sub-list" to="/">
                            <button type="button" class="btn btn-primary btn-lg">Engineering Mechanics - Section 9</button>
                            </Link>
                        </li>
                    </ul>
                    <ul className="list-unstyled">
                        <li>
                            <Link className="Mechanical-sub-list" to="/">
                            <button type="button" class="btn btn-primary btn-lg">Engineering Mechanics - Section 10</button>
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* 6th row */}
                <div className="col-2">
                    <ul className="list-unstyled">
                        <li>
                            <Link className="Mechanical-sub-list" to="/">
                            <button type="button" class="btn btn-primary btn-lg">Engineering Mechanics - Section 11</button>
                            </Link>
                        </li>
                    </ul>
                    <ul className="list-unstyled">
                        <li>
                            <Link className="Mechanical-sub-list" to="/">
                            <button type="button" class="btn btn-primary btn-lg">Engineering Mechanics - Section 12</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default EngineeringMechanics;
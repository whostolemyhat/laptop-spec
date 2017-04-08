import React from 'react';

export default class Options extends React.Component {
    render () {
        return (
            <div className="spec-sheet rounded-grey-border">
                <h2>Customisation Choices</h2>
                <div className="spec-sheet__component">
                    <h4 className="component__title">Screen</h4>
                    <ul className="component__component-options list--no-style">
                        <li className="selected component-options__component-option clickable rounded-grey-border" data-price="400" data-screen-id="1">
                            <span className="component-option__name">13" Retina</span>
                            <span className="component-option__price">£400</span>
                        </li>
                        <li className="component-options__component-option clickable rounded-grey-border" data-price="700" data-screen-id="2">
                            <span className="component-option__name">15" Retina</span>
                            <span className="component-option__price">£700</span>
                        </li>
                    </ul>
                </div>

                <div className="spec-sheet__component">
                    <h4 className="component__title">CPU</h4>
                    <ul className="component__component-options list--no-style">
                        <li className="selected component-options__component-option clickable rounded-grey-border" data-price="300" data-cpu-id="1">
                            <span className="component-option__name">2.7GHz quad-core Intel Core i7 processor, Turbo Boost up to 3.6GHz</span>
                            <span className="component-option__price">£300</span>
                        </li>
                        <li className="component-options__component-option clickable rounded-grey-border" data-price="500" data-cpu-id="2">
                            <span className="component-option__name">2.9GHz quad-core Intel Core i7 processor, Turbo Boost up to 3.8GHz</span>
                            <span className="component-option__price">£500</span>
                        </li>
                    </ul>
                </div>

                <div className="spec-sheet__component">
                    <h4 className="component__title">Storage</h4>
                    <ul className="component__component-options list--no-style">
                        <li className="selected component-options__component-option clickable rounded-grey-border" data-price="100" data-hdd-id="1">
                            <span className="component-option__name">512GB PCIe-based SSD</span>
                            <span className="component-option__price">£100</span>
                        </li>
                        <li className="component-options__component-option clickable rounded-grey-border" data-price="200" data-hdd-id="2">
                            <span className="component-option__name">1TB PCIe-based SSD</span>
                            <span className="component-option__price">£200</span>
                        </li>
                        <li className="component-options__component-option clickable rounded-grey-border" data-price="250" data-hdd-id="3">
                            <span className="component-option__name">2TB PCIe-based SSD</span>
                            <span className="component-option__price">£250</span>
                        </li>
                    </ul>
                </div>

                <div className="spec-sheet__component">
                    <h4 className="component__title">Memory</h4>
                    <ul className="component__component-options list--no-style">
                        <li className="selected component-options__component-option clickable rounded-grey-border" data-price="100" data-ram-id="1">
                            <span className="component-option__name">8 GB 2133MHz memory</span>
                            <span className="component-option__price">£100</span>
                        </li>
                        <li className="component-options__component-option clickable rounded-grey-border" data-price="150" data-ram-id="2">
                            <span className="component-option__name">16 GB 2133MHz memory</span>
                            <span className="component-option__price">£150</span>
                        </li>
                    </ul>
                </div>

                <div className="spec-sheet__component">
                    <h4 className="component__title">Graphics</h4>
                    <ul className="component__component-options list--no-style">
                        <li className="selected component-options__component-option clickable rounded-grey-border" data-price="300" data-gpu-id="1">
                            <span className="component-option__name">Radeon Pro 455 with 2GB memory</span>
                            <span className="component-option__price">£300</span>
                        </li>
                        <li className="component-options__component-option clickable rounded-grey-border" data-price="400" data-gpu-id="2">
                            <span className="component-option__name">Radeon Pro 460 with 4GB memory</span>
                            <span className="component-option__price">£400</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

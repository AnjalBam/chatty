const Sidebar = () => {
    return (
            <div id="sidebar" className="d-none d-md-block col-md-3 p-0 pe-3">
                <div className="sidebar-header">
                    <h3>All Chats</h3>
                </div>
                <div className="sidebar-list">
                    {[1, 2, 3, 4].map(() => {
                        return (
                            <div className="sidebar-list-item">
                                <div className="sidebar-list-item-image">
                                    <div className="active-status active"></div>
                                    <img
                                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pinclipart.com%2Fpicdir%2Fmiddle%2F379-3797946_programming-clipart.png&f=1&nofb=1&ipt=78e2a371d91a9000d2d8a0daef5faac97bea981734b21086d3e0a86c36940a4b&ipo=images"
                                        alt="user"
                                    />
                                </div>
                                <div className="sidebar-list-item-name">
                                    <h4>John Doe</h4>
                                    <p>Hey, how are you?</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
        </div>
    );
};

export default Sidebar;
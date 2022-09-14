const NAVLINK = [
    { id: 1, menu: "제품", link: '/' },
    { id: 2, menu: "러쉬소개", link: '/' },
    { id: 3, menu: "매장안내", link: '/' },
    { id: 4, menu: "스파", link: '/' },
    { id: 5, menu: "이벤트", link: '/' }
]

const Header = () => {

    return (
        <header className="Header">
            <h1>
                <a href="/">
                    LUSH
                </a>
            </h1>
            <nav>
                <ul>
                    {
                        NAVLINK.map((it, idx) => {
                            return (
                                <li key={it.id}>
                                    <a href="">{it.menu}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
            <div className="service">
                <button>
                    <i className="xi-search"></i>
                </button>
                <button>
                    <i className="xi-cart-o"></i>
                </button>
                <button>
                    <i className="xi-emoticon-smiley-o"></i>
                </button>
            </div>
        </header>
    )
}

export default Header;
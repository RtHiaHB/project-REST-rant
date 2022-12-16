const React = require('react')

function Def (html) {

    return (
        <html>
            <head>
                <title>REST-Rant</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous"></link>
                <link rel="stylesheet" href="/css/style.css" />
            </head>
            <body>
                <nav className='navbar fixed-top navbar-dark'>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/places">Places</a>
                        </li>
                        <li>
                            <a href="/places/new">Add Place</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
            </body>
            <footer>
                REST-rant &copy; 2022-{new Date().getFullYear().toString()} Thomas Davidson Enterprises, LLC.  All rights reserved.
            </footer>
        </html>
    )
}

module.exports = Def
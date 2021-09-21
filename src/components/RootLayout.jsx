import React from 'react'

const RootLayout = ({ children, rowClass = ''}) => {
    return (
        <main className="container my-5">
            <section className={`row ${rowClass}`}>
                {children}
            </section>
        </main>
    );
}

export default RootLayout

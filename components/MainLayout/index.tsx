import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const MainLayout = (props: { children: string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined }) => {
    return (
        <div  className="main-layout">
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default MainLayout
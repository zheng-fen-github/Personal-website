
import App, {Container} from 'next/app'
import Head from 'next/head'
import React from 'react'
import Nav from '../component/index/nav'
class MyApp extends App {
    // static getInitialProps = async ({Component}) => {    
    //     console.log(Component)
    //    let pageProps;    
    //     if(Component.getInitialProps) {        
    //         pageProps = await Component.getInitialProps()        
    //     }
    //     return {            
    //         pageProps            
    //     }}         
    render() {    
        const { Component, pageProps } = this.props;                
        return (        
        <Container>
             <Head>
                 <title>Book App</title>      
                 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
             </Head>
            <div className="container-fluid">                
                <Component {...pageProps} />
            </div>
        </Container>    
    )}    
       
      
}
 export default MyApp
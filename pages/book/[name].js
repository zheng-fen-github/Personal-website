import { useRouter } from 'next/router'
import Head from 'next/head'
import fetch from 'node-fetch'
import React, { useState, useEffect } from 'react'
import Book from '../../component/book/js'


const Post = ({book}) => {    
   return <>            
             <Book data={book}/>         
          </>
 }
 export async function getStaticProps(context) {
     
     const list = ['javascript','react','html','css','next','bootstrap']
     let Id =  list.findIndex(e => e === context.params.name);    
     let req = await fetch('http://49.234.96.80:4040/find/book/'+Id);
     let result = await req.json();   
     return {
       props: {
           book:result,
       }, 
     }
   }
 
 export async function getStaticPaths () { 
     return {
        paths: [
        { params: { name:'javascript'} },   
        { params: { name:'react'} },
        { params: { name:'html'} },
        { params: { name:'css'} },
        { params: { name:'next'} },
        { params: { name:'bootstrap'} },
        ],
        fallback: false          
   };
 }
 export default Post
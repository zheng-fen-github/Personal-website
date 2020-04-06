import React from 'react'
import Head from 'next/head'
function Zhixun() {
    return (
        <div>
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
            </Head>
             <div className="row nav">
                <div className="col-8">
                    <div className="row">
                        <div className="col-2 b-light">
                                            2
                        </div>
                        <div className="col-6">
                            3
                        </div>
                    </div>                    
                </div>
            </div>
            <div style={{backgroundColor:'#2C3E50',color:'white'}} className="row title justify-content-center row-cols-1 py-5">
                   <div className="col-12 text-center">
                       <h2>
                            移动互联网广告精准营销专业服务商
                       </h2>
                   </div>
                   <div className="col-12 text-center">
                       <p>
                           最专业的“效果、品牌、流量”移动营销解决方案，为您提供一站式移动整合营销服务。
                       </p>
                   </div>
            </div>
            <div className="row py-5">
                <div className="col-8 offset-2">
                    <div className="row align-items-center">
                        <div className="col">
                             <h2>
                                 hellowrod
                             </h2>
                        </div>
                        <div className="col">
                                <h6 className='my-4'>
                                        广州知讯网络科技有限公司，系移动互联网广告精准营销专业服务商。成立于广州天河区，创立之初至今已累计服务大中华地区超过50家的企业，为客户提供一站式整合营销解决方案！
                                </h6>
                                <h6>
                                    公司高层领导均在广告营销领域拥有10年以上的经验
                                </h6>
                                <h6>
                                    公司高层领导均在广告营销领域拥有10年以上的经验
                                </h6>
                                <h6>
                                    公司高层领导均在广告营销领域拥有10年以上的经验
                                </h6>
                                <h6>
                                    公司高层领导均在广告营销领域拥有10年以上的经验
                                </h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-8 offset-2">
                    <div className="row">
                      <div className="col-4 ">
                          <div className="row">
                              <div className="col-10 b-light offset-1">
                                  hello word
                              </div>
                          </div>
                      </div>
                      <div className="col-4 ">
                          <div className="row">
                              <div className="col-10 b-light offset-1">
                                  hello word
                              </div>
                          </div>
                      </div>
                      <div className="col-4 ">
                          <div className="row">
                              <div className="col-10 b-light offset-1">
                                  hello word
                              </div>
                          </div>
                      </div>
                     
                </div>
                </div>
            </div>
            <style jsx>
                   {`
                   .b-light {
                       background:black;
                   }
                   `}
            </style>
        </div>
    )
}

export default Zhixun

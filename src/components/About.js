import React, { Component } from 'react';

class About extends Component {
    render () {
        return (
            <div>
                <main role="main" className="container" style={{padding:"60px 15px 0"}}>
                    <form className="form-signin">

                        <div className="text-center mb-4">
                            <img className="mb-4" src="e969b20b-6228-4ffb-bd5e-e43cc25610e2.png" alt="" width="90" height="90"/>
                            <h1 className="h3 mb-3 font-weight-normal">- OUR MISSION -</h1>
                            <p>To reduce child mortality rates and promote child wellness in Africa</p>
                            <h1 className="h4 mb-3 font-weight-normal">- About -</h1>
                            <p>
                                Through regular visits to the hospital for check ups, young babies get protection from illnesses that would otherwise be fatal. Mothers are
                                also able to see how much their babies have grown in the time since their last visit. All this gives you and your doctor a good insight into your baby's growth 
                                and development. The doctor can then give you advise about nutrition and safety and you can discuss your child's milestones, social behaviors and learning.
                                This is where we come in, founded in 2019, our platform provides mothers all over Africa an easy way to track their babies' health. Graphs are generated everytime 
                                you update your baby's measurements, you can compare this graph against an ideal graph for a baby with the same parameters as your baby, e.g. gender. You can 
                                also opt in to get reminders when the check up dates and immunisation shots are due.
                            </p>

                        </div>

                    </form>
                </main>
            </div>
        );
    }
}

export default About;

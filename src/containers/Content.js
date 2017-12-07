import React, {Component} from 'react';

class Content extends Component {

    render() {

        return (


            <main  style={{marginTop: '10px'}}>

                <div className="jumbotron">
                    <h1 className="display-3">Hello again.</h1>
                    <p className="lead">This is a ReactJS Rest Api usage page. This Rest Api developed with GOLang.</p>
                    <hr className="my-4"/>
                    <p>So you can check Person information and add person into the database (mongoDB).
                        <br/>If you want to check Go Api repo please click Go Api<br/>
                        or you can check and fork ReactJs Rest Api Repo then click ReactJs Api button.</p>
                    <p className="lead">
                        <a className="btn btn-secondary btn-lg" rel="noopener noreferrer" href="https://github.com/denizgokce" target="_blank"
                           role="button">Go Api Repo</a> &nbsp;
                        <a className="btn btn-primary btn-lg" rel="noopener noreferrer" href="https://github.com/caglarergul" target="_blank"
                           role="button">ReactJS Repo</a>
                    </p>
                </div>


            </main>


        );

    }
}

export default Content;
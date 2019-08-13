import React, { Component } from 'react';
import TruncateMarkup from 'react-truncate-markup';


class Card extends Component {
    constructor(){
      super();
      this.state = {
        pictures: [],
      };
    }
    componentDidMount(){
     // alert(process.env.REACT_APP_API_KEY);

      fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+process.env.REACT_APP_API_KEY+'&tags=london&extras=description,tags,owner_name&per_page=15&page=1&format=json&nojsoncallback=1')
      .then(function(response){
        return response.json();
      })
      .then(function(j){
        //alert(JSON.stringify(j));
        let picArray = j.photos.photo.map((pic) => {

            var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
            var url = 'https://www.flickr.com/photos/'+pic.owner+'/'+pic.id;
            var authourURL = 'https://www.flickr.com/photos/'+pic.owner;
            var title = pic.title;
            var desc = pic.description._content;
            var tags = pic.tags; 
            var author = pic.ownername;  



          return(
            <div className="col-lg-4 col-md-6" key={pic.id} >
              <div className="card card-author border-dark" >
                  <div className="card-img-wrp">
                    <img className="card-img-top" alt="london" src={srcPath}></img>
                  </div>
                <div className="card-body">

                <TruncateMarkup lines={1}>
                  <a href={url} className="card-link card-title"><h2>{title}</h2></a>                    
                </TruncateMarkup>

                  <a href={authourURL} className="card-link card-name"><h3><span>By</span> {author}</h3></a>

                  <TruncateMarkup lines={3}>
                    <p className="card-text card-desc">{desc}</p> 
                  </TruncateMarkup>

                  <p className="card-subtitle"><b>#Tags</b></p>

                  <TruncateMarkup lines={3}>
                    <p className="badge badge-light">{tags}</p>
                  </TruncateMarkup>
                </div>
              </div>
            </div>
          )
        })

        this.setState({pictures: picArray});  

      }.bind(this))
    }
  

  render() {
    return (
        <div className="Card container">
          <div className="row" >
            {this.state.pictures}
          </div>
        </div>
    );
  }

}


export default Card;
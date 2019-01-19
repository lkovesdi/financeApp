import React, { Component } from 'react';
import { connect } from 'react-redux';

class GithubData extends Component {
   componentDidMount() {
      console.log(this.props.data)
   }

   render() {
      return (
         <div>
            <div>
             Name: { this.props.data ? this.props.data.name : "" }
            </div>
            <br />
            <div>
               Github Followers: { this.props.data ? this.props.data.followers : "" }
            </div>
         </div>
   );
   }

}

const mapStateToProps = state => {
   return {
      data: state.data
   };
};

export default connect(
   mapStateToProps,
   null
)(GithubData);
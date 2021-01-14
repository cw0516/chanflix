import { moviesApi, tvApi } from "api";
import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component{

  constructor(props){
    super(props);
    const {location:{pathname}} = props;
    this.state = {
      result: null,
      loading: true, // 로딩할 것이 없다
      error: null,
      isMovie : pathname.includes("/movie/")
    }

  }

 

  async componentDidMount(){
    const {
      match: {
        params:{id}
      },
      history: {push},
      
    } = this.props; // 라우터가 라우트의 컴포넌트에게 사용자가 입력한 url 정보등을 props로 전달해준다.
    
    const { isMovie } = this.state;
    const parsedId = parseInt(id);
    
    if(isNaN(parsedId)){
      return push("/");
    }

    let result = null;
    try{
      if(isMovie){
        ({data : result} = await moviesApi.movieDetail(parsedId));
      }else{
        ({data: result} = await tvApi.showDetail(parsedId));
      }
      
    }catch{
      this.setState({error: "Can't find  anything."});
    }finally{
      this.setState({loading : false, result});
    }
  }

  render(){
    const {result, loading, error} = this.state;
    return (
      <DetailPresenter
        result={result}
        loading={loading}
        error={error}
      />
    )
  }

}
var main = {
  
  func1 : ()=>{
    console.log("-------------------- func1")
    if('')  console.log(`''를 사용`)
    if(true) console.log(`true를 사용`)
    if(0) console.log(`0를 사용`)
    if('str') console.log(`str를 사용`)
    if(null) console.log(`null를 사용`)
  },
  
  func2 : ()=>{
    console.log("-------------------- func2")
    if(!false) console.log(false + ' is falsy value');
    if(!undefined) console.log(undefined + ' is falsy value')
    if(!null) console.log(null + ' is falsy value')
    if(!0) console.log(0 + ' is falsy value')
    if(!NaN) console.log(NaN + ' is falsy value')
    if(!'') console.log('' + ' is falsy value')
  },
  func3 : ()=>{
      function isFalsy(v){
          console.log(`${v}를 사용한다. `)
          console.log(`${!v} \n`);
      }
      console.log("----------------func3")

      isFalsy(false);
      isFalsy(undefined);
      isFalsy(null);
      isFalsy(0);
      isFalsy(NaN);
      isFalsy('');
  }
  


  

}
main.func1();
main.func2();
main.func3();








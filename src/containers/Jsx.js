let name='Mohan';
function CheckEvenOrOdd(num){
  if (num% 2==0){
    return <div>Even</div>
  }
  else{
    return <div>Odd</div>
  }
}

    function CheckAlphabet(char){
    switch (char){
      case'a':
      case'e':
      case'i':
      case'o':
      case'u':
      case'A':
      case'E':
      case'I':
      case'O':
      case'U':
      return <div> vowel</div>
      default:
        return <div> Not Vowel </div>
    }
  } 

 let num=4;
 const users=[
  {name:'Mohan',age: 25},
  {name:'Ram',age: 24},
  {name:'Rohit',age: 21},
 ]
function Jsx() {
  return (
    <div>
      <h2>Hello {name}</h2>
      <div>
        {
          CheckEvenOrOdd(5)
        }
        {
          num%2===0
          ? <div>Even Number</div>
          : <div> Odd Number</div>
        }
        <h3>If Statement</h3>
        {
          num % 2 === 0 &&  <div>Even Number</div>
        }
        {
          num >0 &&<div>Odd Number</div>
        }
      </div>
      <h3>Loop</h3>
      {
        users.map((item, index)=>{
          return <div key={index}>
            {item.name} - {item.age}</div>
        })
      }
      <h3>Switch</h3>
      {
      CheckAlphabet('P')
      }
    </div>
  );
}
export default Jsx;

export function Greet(){
    return <h1> Hello world</h1>
}
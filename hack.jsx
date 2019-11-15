import react, {useState} from "React";

const nandIsCool = 
[
{
  name: "arthur",
  description: "is a legend",
  boolean: true
},
{
  name: "nand",
  description: "is THE legend",
  boolean: true
},
{
  name: "mariam",
  description: "is not a legend",
  boolean: false
}
]

const ChristmasParty = () => {

const [isCool, setIsCool] = useState("")

return(
<>
  <p>I'm doing nothing at work :(</p>
   
  {
    nandIsCool.map(item => {
      item.name item.boolean
    })
  }
  
</>
)
}

export defaults ChristmasParty;

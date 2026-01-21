//Greeting.tsx

type GreetingProps={
    name:string;
    age?:number;
};
export function Greeting({name,age}:GreetingProps){
    return(
        <div>
            <h2>Hello,{name}</h2>
            {age !==undefined && <p>Your are {age} years old.</p>}
        </div>

    );
}
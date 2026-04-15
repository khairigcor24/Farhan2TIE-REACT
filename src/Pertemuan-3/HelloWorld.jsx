export default function HelloWorld(){
    const propsUserCard = {
        nama : "Udin engakS?",
        nim : "2424242424",
        tanggal : "21/03/2006",
    };
    return (
        <div>
            <h1>Valorant</h1>
            <p>Neononly</p>
            <GretingBinjai/>
            <QuoteText/>
            <UserCard
            nama = "Farhan"
            nim = "2455301065"
            tanggal = "2006/24/7"/>
            <UserCard {...propsUserCard}/>
            <img src="img/yy.jpg" alt="logo"/>
        </div>
    )
}

function GretingBinjai(){
    return(
        <small>Valorant tiokum</small>
    )
}

function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}


function UserCard(props){
    return (
        <div>
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}

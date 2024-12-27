import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CloudIcon from '@mui/icons-material/Cloud';
import "./Info.css";
import cloud from"./cloudy.png";



export default function Info({ info }) {
    const URL = "https://images.unsplash.com/photo-1734383640834-a53c9c5927f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8";
    let Hot_Url="https://plus.unsplash.com/premium_photo-1676667573062-9f8a58721c29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fHN1bW1lcnxlbnwwfHwwfHx8MA%3D%3D";
    let Cold_Url="https://images.unsplash.com/photo-1431036101494-66a36de47def?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2ludGVyfGVufDB8fDB8fHww";
    let Rain_Url="https://plus.unsplash.com/premium_photo-1664303017917-71ebeb42343d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";

    return (
        <div >
            <br />

            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 80 ? Rain_Url : info.temp > 15 ? Hot_Url : Cold_Url }
                    
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"} >
                        <div>Temperature:{info.temp}&deg;</div>
                        <br />
                        <div>Temp_min:{info.temp_min}&deg;</div>
                        <br />
                        <div>Temp_max:{info.temp_max}&deg;</div>
                        <br />
                        <div>Humidity:{info.humidity}</div>
                        <br />
                        <div>The weather can be description as {info.description} and feels like {info.feels_like}</div>
                        <br />
                    </Typography>
                </CardContent>

            </Card>
        </div>
    )
}
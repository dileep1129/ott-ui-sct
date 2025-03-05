import React from 'react'
import './main.scss';
import CustomButton from '../components/CustomButton';
function Main() {
return (
<div>
<section>
<div className="img">
<div className="img1">
<img src="GameChanger.jpg" alt="" />
<h1>RamCharan</h1>
<p>Ram Nandan successfully clears the UPSC exam to become a District Magistrate and is posted to Visakhapatnam, Andhra Pradesh. However, on his way to his posting, he is attacked by a gang sent by his former college rival, "Sand" Simha, who is involved in illegal sand mining under the protection of Minister Bobbili Mopidevi.</p>
</div>
</div>
 
<CustomButton label="Watch Trailer" color='primary' ></CustomButton>
<CustomButton label="Watch Later" color='dark'></CustomButton>
<CustomButton label="Season" color='success'></CustomButton>
<CustomButton label="Sort" color='white'></CustomButton>
</section>
</div>
)
}
 
export default Main;
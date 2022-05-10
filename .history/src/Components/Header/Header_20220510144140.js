import React from 'react'
import './Header.css'

const Header = () => {

  
  return (
    <div className='header'>
        <div className='header-container'>
          <h3>Movie Lovers</h3>
          #menu{
	padding:0;
	list-style-type:none;
	width:960px;
	background:#4E4E4E;
	border-bottom:5px solid orange;
	min-height:38px;
	margin:0 auto;
}
#menu li{
	float:left;
	border-right:1px solid #605B5B;
	border-left:1px solid #2B2A2A;
	position:relative;
	
}

#menu li:last-child{
	border-right:none;
}
#menu li:first-child{
	border-left:none;
}
#menu li a{
	color:#fff;
	text-decoration:none;
	background:#4E4E4E;
	padding:10px 20px;
	display:block;
	transition:0.3s all ease;
}
#menu li a:hover{
	background:orange;
}


#menu li ul{
	list-style-type:none;
	padding:0;
	position:absolute;
	left:-99999px;
	/*transition:0.5s all ease;*/
}
#menu li:hover ul{
	left:0;
}

#menu li ul li{
	float:none;
	border-right:none;
	border-left:none;
	border-top:1px solid #605B5B;
	border-bottom:1px solid #2B2A2A;	
	width:200px;
	position:relative;
}

#menu li ul li ul{
	position:absolute;
	top:-999999px;
}
#menu li ul li:hover ul{
	top:0;
	left:200px;
}













          <form>
            <input type='text' name='movieSearch' className='search-box' placeholder='Search...'></input>
            <button type='submit' className='btn'>Search</button>
          </form>
        </div>

        

    </div>
  )
}

export default Header
<style>

	*{
		padding: 0;
		margin: 0;
	}

	html, body{

		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.loader{

		display: flex;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: center;
		position: relative;
		top: 0;
		margin: auto;

		height: 100px;
		width: 100px;
	}

	.loader img{
		position: absolute;
	}

	.cromo1{
	
		animation: rotar 6s ease-in-out 0s infinite;

	}

	.cromo2{

		animation: rotar 5s ease-in-out 0s infinite reverse;

	}

	.cromo3{

		animation: rotar 4s ease-in-out 0s infinite;

	}

	.cromo4{

		animation: rotar 3s ease-in-out 0s infinite reverse;

	}

	.cromo5{

		animation: rotar 3s ease-in-out 0s infinite;

	}

	.cromo6{

		animation: rotar 4s ease-in-out 0s infinite reverse;

	}

	.cromo7{

		animation: rotar 5s ease-in-out 0s infinite;

	}

	.cromo8{

		animation: rotar 6s ease-in-out 0s infinite reverse;

	}

	@keyframes rotar{
		from{
			-moz-transform: rotate(0deg);
			-webkit-transform: rotate(0deg);
			-o-transform: rotate(0deg);
			-ms-transform: rotate(0deg);
			transform: rotate(0deg);
		}
		to{
			-moz-transform: rotate(360deg);
			-webkit-transform: rotate(360deg);
			-o-transform: rotate(360deg);
			-ms-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}
	
</style>

<div id="loader" class="loader">
	
	<img src="../images/cromo2.png" alt="" class="cromo2">
	<img src="../images/cromo3.png" alt="" class="cromo3">
	<img src="../images/cromo4.png" alt="" class="cromo4">
	<img src="../images/cromo5.png" alt="" class="cromo5">
	<img src="../images/cromo6.png" alt="" class="cromo6">
	<img src="../images/cromo7.png" alt="" class="cromo7">
	<img src="../images/cromo8.png" alt="" class="cromo8">
	<img src="../images/cromo1.png" alt="" class="cromo1">

</div>
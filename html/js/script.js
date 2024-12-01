
var playerdata = {}
var idp = 9999
var ping = 9999
var hunger = 100
var thirst = 100
var health = 100
var jobname = ""
var salary1 = 0
var job2name = ""
var salary2 = 0
var databank = {}
var bank = 0
var cash = 0

window.addEventListener('message', function(event) {
    if (event.data.type == "showPm") {
		
		playerdata = event.data.playerd
		idp = event.data.idp
		ping = event.data.ping
		hunger = event.data.hunger
		thirst = event.data.thirst
		health = event.data.health

		health = ((health / 200) * 100)

		actjob2 = event.data.actjob2
		
		$("body").css("display","flex")
		loadPm()
    }

	if (event.data.type == "hidePm") {
		hidePm()		
    }

})

//-----------------------------------------------------------------//
// Load Pm
//-----------------------------------------------------------------//

function loadPm() {
	$("body .bg .content").html(``)
	htmlPmAcc = ``
	htmlPmAcc = `
	<div class="btontitlemap" id="btontitlemap" onclick="map()">
		<svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffffff" d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5l0 39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9l0 39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7l0-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1L257 256c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
		${btn["maptitle"]}
	</div>
	<div class="btonmap" id="btonmap" onclick="map()">					
		<div class="btoncontent" id="btoncontent">
		${btn["mapdesc"]}
		</div>
	</div>
	
	<div class="btontitlerules" id="btontitlerules" onclick="showRules()">
		<svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 576 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffffff" d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5l0-377.4c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8L0 454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5l0-370.3c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11L304 456c0 11.4 11.7 19.3 22.4 15.5z"/></svg>
		${btn["rulestitle"]}
	</div>
	<div class="btonrules" id="btonrules" onclick="showRules()">					
		<div class="btoncontent" id="btoncontent">
		${btn["rulesdesc"]}
		</div>
	</div>

	<div class="btontitleplayerinfo" id="btontitleplayerinfo">
		<svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ff4500" d="M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"/></svg>
		${btn["playertitle"]}
	</div>
	<div class="btonplayerinfo" id="btonplayerinfo">					
		<div class="btoncontent" id="btoncontent">
			<div class="namep" id="namep">
				<div class="svgnamep" id="svgnamep">
					<svg xmlns="http://www.w3.org/2000/svg" height="14" width="17.5" viewBox="0 0 640 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ff4500" d="M192 128c0-17.7 14.3-32 32-32s32 14.3 32 32l0 7.8c0 27.7-2.4 55.3-7.1 82.5l-84.4 25.3c-40.6 12.2-68.4 49.6-68.4 92l0 71.9c0 40 32.5 72.5 72.5 72.5c26 0 50-13.9 62.9-36.5l13.9-24.3c26.8-47 46.5-97.7 58.4-150.5l94.4-28.3-12.5 37.5c-3.3 9.8-1.6 20.5 4.4 28.8s15.7 13.3 26 13.3l128 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-83.6 0 18-53.9c3.8-11.3 .9-23.8-7.4-32.4s-20.7-11.8-32.2-8.4L316.4 198.1c2.4-20.7 3.6-41.4 3.6-62.3l0-7.8c0-53-43-96-96-96s-96 43-96 96l0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32zm-9.2 177l49-14.7c-10.4 33.8-24.5 66.4-42.1 97.2l-13.9 24.3c-1.5 2.6-4.3 4.3-7.4 4.3c-4.7 0-8.5-3.8-8.5-8.5l0-71.9c0-14.1 9.3-26.6 22.8-30.7zM24 368c-13.3 0-24 10.7-24 24s10.7 24 24 24l40.3 0c-.2-2.8-.3-5.6-.3-8.5L64 368l-40 0zm592 48c13.3 0 24-10.7 24-24s-10.7-24-24-24l-310.1 0c-6.7 16.3-14.2 32.3-22.3 48L616 416z"/></svg>
				</div>
				<div class="value" id="value">
					${playerdata.name}
				</div>
			</div>
			<div class="idp" id="idp">
				<div class="svgidp" id="svgidp">
					<svg xmlns="http://www.w3.org/2000/svg" height="14" width="10.5" viewBox="0 0 384 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ff4500" d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zm96 320l64 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16L96 416c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM144 64l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
				</div>
				<div class="value" id="value">
					${idp}
				</div>
			</div>
			<div class="pingp" id="pingp">			
				<div class="svgpingp" id="svgpingp">			
					<svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffffff" d="M448 80l0 48c0 44.2-100.3 80-224 80S0 172.2 0 128L0 80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6L448 288c0 44.2-100.3 80-224 80S0 332.2 0 288L0 186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6l0 85.9c0 44.2-100.3 80-224 80S0 476.2 0 432l0-85.9z"/></svg>
				</div>
				<div class="value" id="value">${ping} ms</div>
			</div>
			<div class="healthp" id="healthp">
				<div class="svghealthp" id="svghealthp">	
					<svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ff4500" d="M228.3 469.1L47.6 300.4c-4.2-3.9-8.2-8.1-11.9-12.4l87 0c22.6 0 43-13.6 51.7-34.5l10.5-25.2 49.3 109.5c3.8 8.5 12.1 14 21.4 14.1s17.8-5 22-13.3L320 253.7l1.7 3.4c9.5 19 28.9 31 50.1 31l104.5 0c-3.7 4.3-7.7 8.5-11.9 12.4L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9zM503.7 240l-132 0c-3 0-5.8-1.7-7.2-4.4l-23.2-46.3c-4.1-8.1-12.4-13.3-21.5-13.3s-17.4 5.1-21.5 13.3l-41.4 82.8L205.9 158.2c-3.9-8.7-12.7-14.3-22.2-14.1s-18.1 5.9-21.8 14.8l-31.8 76.3c-1.2 3-4.2 4.9-7.4 4.9L16 240c-2.6 0-5 .4-7.3 1.1C3 225.2 0 208.2 0 190.9l0-5.8c0-69.9 50.5-129.5 119.4-141C165 36.5 211.4 51.4 244 84l12 12 12-12c32.6-32.6 79-47.5 124.6-39.9C461.5 55.6 512 115.2 512 185.1l0 5.8c0 16.9-2.8 33.5-8.3 49.1z"/></svg>
				</div>
				<div class="barre" id="barre">
					<div class="value" id="value"></div>
				</div>
			</div>
			<div class="hungerp" id="hungerp">
				<div class="svghungerp" id="svghungerp">	
					<svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ff4500" d="M416 0C400 0 288 32 288 176l0 112c0 35.3 28.7 64 64 64l32 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 0-112 0-208c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7L80 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224.4c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16l0 134.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8L64 16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"/></svg>
				</div>
				<div class="barre" id="barre">
					<div class="value" id="value"></div>
				</div>
			</div>
			<div class="thirstp" id="thirstp">
				<div class="svgthirstp" id="svgthirstp">	
					<svg xmlns="http://www.w3.org/2000/svg" height="14" width="8.75" viewBox="0 0 320 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ff4500" d="M96 0C82.7 0 72 10.7 72 24s10.7 24 24 24c4.4 0 8 3.6 8 8l0 64.9c0 12.2-7.2 23.1-17.2 30.1C53.7 174.1 32 212.5 32 256l0 192c0 35.3 28.7 64 64 64l128 0c35.3 0 64-28.7 64-64l0-192c0-43.5-21.7-81.9-54.8-105c-10-7-17.2-17.9-17.2-30.1L216 56c0-4.4 3.6-8 8-8c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0s0 0 0 0s0 0 0 0L104 0s0 0 0 0s0 0 0 0L96 0zm64 382c-26.5 0-48-20.1-48-45c0-16.8 22.1-48.1 36.3-66.4c6-7.8 17.5-7.8 23.5 0C185.9 288.9 208 320.2 208 337c0 24.9-21.5 45-48 45z"/></svg>
				</div>
				<div class="barre" id="barre">
					<div class="value" id="value"></div>
				</div>
			</div>
			<div class="job1p" id="job1p">			
				<div class="svgjob1p" id="svgjob1p">			
					<svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffffff" d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z"/></svg>
				</div>
				<div class="value" id="value">
					<div class="valuejob" id="valuejob"></div>
					<div class="valuesalary" id="valuesalary"></div>
				</div>
			</div>
			<div class="job2p" id="job2p">			
				<div class="svgjob2p" id="svgjob2p">			
					<svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffffff" d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z"/></svg>
				</div>
				<div class="value" id="value">
					<div class="valuejob" id="valuejob"></div>
					<div class="valuesalary" id="valuesalary"></div>
				</div>
			</div>
			<div class="cashp" id="cashp">
				<div class="svgcashp" id="svgcashp">
					<svg xmlns="http://www.w3.org/2000/svg" height="14" width="17.5" viewBox="0 0 640 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ff4500" d="M96 96l0 224c0 35.3 28.7 64 64 64l416 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L160 32c-35.3 0-64 28.7-64 64zm64 160c35.3 0 64 28.7 64 64l-64 0 0-64zM224 96c0 35.3-28.7 64-64 64l0-64 64 0zM576 256l0 64-64 0c0-35.3 28.7-64 64-64zM512 96l64 0 0 64c-35.3 0-64-28.7-64-64zM288 208a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120L0 360c0 66.3 53.7 120 120 120l400 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-400 0c-39.8 0-72-32.2-72-72l0-240z"/></svg>
				</div>
				<div class="value" id="value">
					
				</div>
			</div>
			<div class="bankp" id="bankp">
				<div class="svgbankp" id="svgbankp">
					<svg xmlns="http://www.w3.org/2000/svg" height="14" width="15.75" viewBox="0 0 576 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ff4500" d="M512 80c8.8 0 16 7.2 16 16l0 32L48 128l0-32c0-8.8 7.2-16 16-16l448 0zm16 144l0 192c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-192 480 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0z"/></svg>
				</div>
				<div class="value" id="value">
					
				</div>
			</div>
		</div>
	</div>
	<div class="btonshop" id="btonshop" onclick="shopcontent()">
		<div class="btoncontent" id="btoncontent">
			${btn["shoptitle"]}
			<br/>
			${btn["shopdesc"]}
		</div>
	</div>
	<div class="btontitlenews" id="btontitlenews">
		<svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffffff" d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM96 136c0-13.3 10.7-24 24-24c137 0 248 111 248 248c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-110.5-89.5-200-200-200c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24c83.9 0 152 68.1 152 152c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-57.4-46.6-104-104-104c-13.3 0-24-10.7-24-24zm0 120a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
		${btn["newstitle"]}
	</div>
	<div class="btonnews" id="btonnews">					
		<div class="btoncontent" id="btoncontent">
			<div class="contentnews" id="contentnews">
				
			</div>
		</div>
	</div>
	`
	$("body .bg .content").html(htmlPmAcc)
	$("body .bg .content .btonplayerinfo .healthp .barre .value").css("width",`${health}%`)
	$("body .bg .content .btonplayerinfo .hungerp .barre .value").css("width",`${hunger}%`)
	$("body .bg .content .btonplayerinfo .thirstp .barre .value").css("width",`${thirst}%`)

	loadshop()
	loadNews()
	loadbank()
	loadjobs()

}

//-----------------------------------------------------------------//
// Jobs
//-----------------------------------------------------------------//

function loadjobs(){
	if (playerdata) {
		jobname = playerdata.job.label
		gradelabel1 = playerdata.job.grade_label
		salary1 = playerdata.job.grade_salary
		if (actjob2 == true) {
			job2name = playerdata.job2.label
			gradelabel2 = playerdata.job2.grade_label
			salary2 = playerdata.job2.grade_salary
			htmlJob2 = `${job2name} - ${gradelabel2}`
			htmlSalary2 = `${salary2} ${currency}`
		$("body .bg .content .btonplayerinfo .job2p .value .valuejob").html(htmlJob2)
		$("body .bg .content .btonplayerinfo .job2p .value .valuesalary").html(htmlSalary2)
		} else {
			$("body .bg .content .btonplayerinfo .job2p").css("display","none")

			$("body .bg .content .btonplayerinfo .cashp").css("height","8%")
			$("body .bg .content .btonplayerinfo .cashp").css("margin-top","3.5%")
			$("body .bg .content .btonplayerinfo .bankp").css("height","8%")
			$("body .bg .content .btonplayerinfo .bankp").css("margin-top","1.5%")
		}
		htmlJob1 = `${jobname} - ${gradelabel1}`
		htmlSalary1 = `${salary1} ${currency}`
		$("body .bg .content .btonplayerinfo .job1p .value .valuejob").html(htmlJob1)
		$("body .bg .content .btonplayerinfo .job1p .value .valuesalary").html(htmlSalary1)
	}
	htmlCash = `${cash} +${currency}`
	htmlBank = `${bank} +${currency}`
	$("body .bg .content .btonplayerinfo .cashp .value").html(htmlCash)
	$("body .bg .content .btonplayerinfo .bankp .value").html(htmlBank)
}

//-----------------------------------------------------------------//
// Bank
//-----------------------------------------------------------------//

function loadbank(){
	if (playerdata) {
		let databank = playerdata.accounts
		let leng = databank.length
		for (let pdataIndex = 0; pdataIndex < databank.length; pdataIndex++) {
			const elementData = databank[pdataIndex]
			let type = elementData.name
			let amount = elementData.money
			if (type == "bank") {
				bank = amount
			}
			if (type == "money") {
				cash = amount
			}
		}
	}
	htmlCash = `${cash} +${currency}`
	htmlBank = `${bank} +${currency}`
	$("body .bg .content .btonplayerinfo .cashp .value").html(htmlCash)
	$("body .bg .content .btonplayerinfo .bankp .value").html(htmlBank)
}

//-----------------------------------------------------------------//
// Shop
//-----------------------------------------------------------------//

function loadshop() {
	if (shoplink == "") {		
		$("body .bg .content .btonshop").css("display","none")
		$("body .bg .content .btonnews").css("height","91.5%")
		$("body .bg .content .btonnews").css("margin-top","1%")
		$("body .bg .content .btonnews .btoncontent").css("height","95%")
		$("body .bg .content .btonnews .btoncontent .contentnews").css("margin-top","30%")
		$("body .bg .content .btontitlenews").css("margin-top","2.6%")
		$("body .bg .content .btontitlenews").css("height","12%")
	}
}

//-----------------------------------------------------------------//
// Rules
//-----------------------------------------------------------------//

function showRules() {
	$("body .bg .content").html(``)

	htmlRules = ``
	htmlRules = `
		<div class="rulestitle" id="rulestitle">${btn["rulestitle"]}</div>
		<div class="rulesback" id="rulesback" onclick="backRules()">
			<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffffff" d="M48.5 224L40 224c-13.3 0-24-10.7-24-24L16 72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8L48.5 224z"/></svg>
		</div>
		<div class="contentrules" id="contentrules"></div>
	`
	$("body .bg .content").html(htmlRules)
	$("body .bg .content .rulestitle").css("display","flex")
	$("body .bg .content .rulesback").css("display","flex")
	$("body .bg .content .contentrules").css("display","flex")
	loadRules()
}

function loadRules() {
	htmlContentRules = ``
	for (let rulesIndex = 0; rulesIndex < rules.length; rulesIndex++) {
		const elementRules = rules[rulesIndex]
		let title = elementRules.title
		let content = elementRules.content
		htmlContentRules = htmlContentRules + `
		<div class="boxrule" id="boxrule">
			<div class="ruletitle" id="ruletitle">${title}</div>
			<div class="rulecontent" id="rulecontent">
				${content}
			</div>
		</div>
		`
	}
	$("body .bg .content .contentrules").html(htmlContentRules)
}

function backRules() {
	loadPm()
}

//-----------------------------------------------------------------//
// News
//-----------------------------------------------------------------//

function loadNews(){
	htmlNewsContent = ``
	for (let newsIndex = 0; newsIndex < news.length; newsIndex++) {
		const elementNews = news[newsIndex]
		let title = elementNews.title
		let content = elementNews.content
		htmlNewsContent = htmlNewsContent + `
		<div class="boxnews" id="boxnews">
			<div class="newstitle" id="newstitle">${title}</div>
			<div class="contentboxnews" id="contentboxnews">
				${content}
			</div>
		</div>
		`
	}
	$("body .bg .content .btonnews .btoncontent .contentnews").html(htmlNewsContent)
}

//-----------------------------------------------------------------//
// Discrod
//-----------------------------------------------------------------//

function discordl(){
	if (discordlink != "") {
		window.invokeNative('openUrl', discordlink)
	} 
}

//-----------------------------------------------------------------//
// youtube
//-----------------------------------------------------------------//

function youtubel(){
	if (youtubelink != "") {
		window.invokeNative('openUrl', youtubelink)
	} 
}
//-----------------------------------------------------------------//
// Shop content
//-----------------------------------------------------------------//

function shopcontent(){
	if (shoplink != "") {
		window.invokeNative('openUrl', shoplink)
	} 
}

//-----------------------------------------------------------------//
// Map
//-----------------------------------------------------------------//

function map() {
	$.post(`https://${GetParentResourceName()}/map`, JSON.stringify({}))
}

//-----------------------------------------------------------------//
// Base
//-----------------------------------------------------------------//

function hidePm() {
	$("body").css("display","none")
	$.post(`https://${GetParentResourceName()}/closePm`, JSON.stringify({}))
}


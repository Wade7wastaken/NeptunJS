var locServer,
	xboxMode,
	BrowserInfo,
	testd,
	testa,
	mmnva,
	checkOldsave,
	savestate,
	saqw,
	sdwq,
	nlyr25,
	MEMFSE,
	ENODEVE,
	streamMs,
	tempRets,
	readBinarys,
	dumpx,
	ENVIRONMENT_IS_SHELLS,
	ENVIRONMENT_IS_NODES,
	STACK_ALIGNS,
	elemIcon,
	load_wasm,
	load_asm,
	load_proteus,
	NJSerror,
	NJSPlatform_lang,
	NJSerrorEvent,
	ltm,
	GetsaveName,
	RAF_FPS,
	RAF_FPS_set,
	NJSC,
	swapinfo,
	SSMB,
	vastER,
	iUpa,
	_$af320800,
	rbtl,
	NepDefCon,
	boxartimg,
	NepZoom,
	NepZoom,
	NselectGameLang,
	NepLang,
	NepEmu,
	SaveTitle,
	SaveTitleRUS,
	SaveTitleJP,
	gameUrlRus,
	gameUrlJP,
	gameUrl,
	NepEmuAR,
	psxSkipBios,
	cd2,
	cd3,
	cd4,
	cd5,
	cd6,
	cd7,
	cd8,
	Ndebag,
	EmuN64air,
	fba_unibios,
	neogeoCPU,
	xboxOne,
	NepAutoStart,
	neogeoBios,
	NepColor,
	NepMaxWidth,
	NepMaxHeight,
	EmuGbaBios,
	NepEmuOP,
	NepPlayer,
	antiAdBlock,
	gbabios,
	gbabios,
	cd2html,
	cd3html,
	cd4html,
	cd5html,
	cd6html,
	cd7html,
	cd8html,
	MultiCD,
	popupdata,
	MCDload,
	cd2GetUrl,
	cd3GetUrl,
	cd4GetUrl,
	cd5GetUrl,
	cd6GetUrl,
	cd7GetUrl,
	cd8GetUrl,
	getDataCdUrl,
	zipname,
	separatorss,
	separators,
	rometipe,
	ZName,
	fixZipname,
	getZipName,
	widthToHeight,
	aspect_ratio,
	NeptunP,
	baseUrl,
	getTitle,
	resultid,
	fileType,
	getTitlesClear,
	romTitle,
	getCached,
	clearFileType,
	game,
	gameRUS,
	gameJP,
	gameRUS,
	getfullname,
	bootRome,
	bootRome,
	fba_cpu,
	neptunPlatform,
	cssImg,
	cssImg,
	cssImg,
	imageLconlCont,
	imageLconlCont,
	imageLconlCont,
	progressText,
	langsavegame,
	langSM,
	Lstatus,
	Dstatus,
	remountLangBar,
	SWAPLang,
	TextSWAPLang,
	Text2SWAPLang,
	Text3SWAPLang,
	Text4SWAPLang,
	Text5SWAPLang,
	DiscMenuLang,
	ButtonSWAPSaveStateLang,
	InfoSWAPMountLang,
	InfoSWAPMountFinishLang,
	QsaveInfoBar,
	NJSOFF,
	NJSOn,
	VideoMenuLable1,
	VideoMenuLable1S,
	VideoMenuLable1AR,
	shadersOP1,
	shadersOP2,
	shadersOP3,
	shadersOP4,
	shadersOP5,
	shadersOP6,
	shadersOP7,
	shadersOP7,
	gpadNameId,
	arOP1,
	arOP2,
	arOP3,
	arOP4,
	RestartEmuleOP,
	ShadersLangBar,
	ButSetTolang,
	SNJSCLang,
	CloseLang,
	saveALLgame,
	saveOnlygame,
	ControlSetupLang,
	AdveSetLang,
	AccuracyN64,
	n64WH,
	CloseLang,
	resetLan,
	saveSlang,
	nesNolimit,
	gg_Extra,
	makeScreenShot,
	imgSettings,
	LoadEmuleNote,
	StartEmuleNote,
	EndEmuleNote,
	LangControl,
	restartLangBar,
	saveLangBar,
	loadLangBar,
	SaveStatePC,
	LoadStatePC,
	muteLangBar,
	pauseEmu,
	controll,
	settingsLang,
	controlLang,
	controlsSetting,
	optionLang,
	smoothingLang,
	videoLang,
	fpsLang,
	playLang,
	startplayLang,
	gamepadLang,
	restartLangBar,
	muteLangBar,
	fullscreenLangBar,
	zoomLangBar,
	saveInfoBar,
	loadInfoBar,
	muteInfoBar,
	restartInfoBar,
	downloadInfo,
	redydInfo,
	shedersBW,
	speedNes,
	defaultText,
	off,
	redyNeptun,
	endNeptun,
	LangGameSelect,
	NumLock,
	gamepadCon,
	ColorBW,
	DSOneScreen,
	FrameSkip,
	N64VC,
	RenderSize,
	N64Hack,
	N64Low,
	N64Sred,
	N64Hight,
	N64VEryHight,
	N64Core,
	PSXBios,
	AspectR,
	Region,
	AutoSave,
	LangControl,
	psx_typeGpad,
	showFPSLang,
	BrowserWar,
	ControlWar,
	Qst1,
	Qst2,
	progressText,
	langsavegame,
	langSM,
	Lstatus,
	Dstatus,
	remountLangBar,
	SWAPLang,
	TextSWAPLang,
	Text2SWAPLang,
	Text3SWAPLang,
	Text4SWAPLang,
	Text5SWAPLang,
	DiscMenuLang,
	ButtonSWAPSaveStateLang,
	InfoSWAPMountLang,
	InfoSWAPMountFinishLang,
	QsaveInfoBar,
	NJSOFF,
	NJSOn,
	ControlWar,
	Qst1,
	Qst2,
	VideoMenuLable1,
	VideoMenuLable1S,
	VideoMenuLable1AR,
	shadersOP1,
	shadersOP2,
	shadersOP3,
	shadersOP4,
	shadersOP5,
	shadersOP6,
	shadersOP7,
	shadersOP7,
	gpadNameId,
	arOP1,
	arOP2,
	arOP3,
	arOP4,
	ShadersLangBar,
	ButSetTolang,
	SNJSCLang,
	CloseLang,
	saveALLgame,
	saveOnlygame,
	ControlSetupLang,
	AdveSetLang,
	makeScreenShot,
	AccuracyN64,
	n64WH,
	nesNolimit,
	gg_Extra,
	resetLan,
	saveSlang,
	imgSettings,
	showFPSLang,
	psx_typeGpad,
	controlsSetting,
	ANADB,
	SaveStatePC,
	LoadStatePC,
	LoadEmuleNote,
	StartEmuleNote,
	EndEmuleNote,
	LangControl,
	restartLangBar,
	saveLangBar,
	loadLangBar,
	muteLangBar,
	pauseEmu,
	controll,
	saveInfoBar,
	loadInfoBar,
	muteInfoBar,
	restartInfoBar,
	settingsLang,
	controlLang,
	optionLang,
	smoothingLang,
	videoLang,
	fpsLang,
	playLang,
	startplayLang,
	gamepadLang,
	resetLan,
	saveLangBar,
	loadLangBar,
	muteLangBar,
	fullscreenLangBar,
	zoomLangBar,
	downloadInfo,
	readyInfo,
	sheders,
	shedersBW,
	speedNes,
	defaultText,
	off,
	LangGameSelect,
	NumLock,
	gamepadCon,
	ColorBW,
	DSOneScreen,
	FrameSkip,
	N64VC,
	RenderSize,
	N64Hack,
	N64Low,
	N64Sred,
	N64Hight,
	N64VEryHight,
	N64Core,
	PSXBios,
	AspectR,
	Region,
	AutoSave,
	BrowserWar,
	progressText,
	langsavegame,
	langSM,
	Lstatus,
	Dstatus,
	remountLangBar,
	SWAPLang,
	TextSWAPLang,
	Text2SWAPLang,
	Text3SWAPLang,
	Text4SWAPLang,
	Text5SWAPLang,
	DiscMenuLang,
	ButtonSWAPSaveStateLang,
	InfoSWAPMountLang,
	InfoSWAPMountFinishLang,
	QsaveInfoBar,
	NJSOFF,
	NJSOn,
	ControlWar,
	Qst1,
	Qst2,
	VideoMenuLable1,
	VideoMenuLable1S,
	VideoMenuLable1AR,
	shadersOP1,
	shadersOP2,
	shadersOP3,
	shadersOP4,
	shadersOP5,
	shadersOP6,
	shadersOP7,
	shadersOP7,
	gpadNameId,
	arOP1,
	arOP2,
	arOP3,
	arOP4,
	ShadersLangBar,
	ButSetTolang,
	SNJSCLang,
	CloseLang,
	saveALLgame,
	saveOnlygame,
	ControlSetupLang,
	AdveSetLang,
	makeScreenShot,
	AccuracyN64,
	n64WH,
	nesNolimit,
	gg_Extra,
	resetLan,
	saveSlang,
	psx_typeGpad,
	imgSettings,
	showFPSLang,
	controlsSetting,
	SaveStatePC,
	LoadStatePC,
	LoadEmuleNote,
	StartEmuleNote,
	EndEmuleNote,
	LangControl,
	saveInfoBar,
	loadInfoBar,
	muteInfoBar,
	restartInfoBar,
	settingsLang,
	controlLang,
	optionLang,
	smoothingLang,
	videoLang,
	fpsLang,
	playLang,
	startplayLang,
	gamepadLang,
	restartLangBar,
	saveLangBar,
	loadLangBar,
	muteLangBar,
	fullscreenLangBar,
	zoomLangBar,
	downloadInfo,
	readyInfo,
	sheders,
	shedersBW,
	speedNes,
	defaultText,
	off,
	LangGameSelect,
	NumLock,
	gamepadCon,
	ColorBW,
	DSOneScreen,
	FrameSkip,
	N64VC,
	RenderSize,
	N64Hack,
	N64Low,
	N64Sred,
	N64Hight,
	N64VEryHight,
	N64Core,
	PSXBios,
	AspectR,
	Region,
	AutoSave,
	BrowserWar,
	restartLangBar,
	saveLangBar,
	loadLangBar,
	muteLangBar,
	pauseEmu,
	controll,
	progressText,
	langsavegame,
	langSM,
	Lstatus,
	Dstatus,
	remountLangBar,
	SWAPLang,
	TextSWAPLang,
	Text2SWAPLang,
	Text3SWAPLang,
	Text4SWAPLang,
	Text5SWAPLang,
	DiscMenuLang,
	ButtonSWAPSaveStateLang,
	InfoSWAPMountLang,
	InfoSWAPMountFinishLang,
	QsaveInfoBar,
	NJSOFF,
	NJSOn,
	ControlWar,
	Qst1,
	Qst2,
	VideoMenuLable1,
	VideoMenuLable1S,
	VideoMenuLable1AR,
	shadersOP1,
	shadersOP2,
	shadersOP3,
	shadersOP4,
	shadersOP5,
	shadersOP6,
	shadersOP7,
	shadersOP7,
	gpadNameId,
	arOP1,
	arOP2,
	arOP3,
	arOP4,
	ShadersLangBar,
	ButSetTolang,
	SNJSCLang,
	CloseLang,
	saveALLgame,
	saveOnlygame,
	ControlSetupLang,
	AdveSetLang,
	makeScreenShot,
	AccuracyN64,
	n64WH,
	nesNolimit,
	gg_Extra,
	resetLan,
	saveSlang,
	psx_typeGpad,
	imgSettings,
	showFPSLang,
	controlsSetting,
	SaveStatePC,
	LoadStatePC,
	LoadEmuleNote,
	StartEmuleNote,
	EndEmuleNote,
	LangControl,
	saveInfoBar,
	loadInfoBar,
	muteInfoBar,
	restartInfoBar,
	settingsLang,
	controlLang,
	optionLang,
	smoothingLang,
	videoLang,
	fpsLang,
	playLang,
	startplayLang,
	gamepadLang,
	restartLangBar,
	saveLangBar,
	loadLangBar,
	muteLangBar,
	fullscreenLangBar,
	zoomLangBar,
	downloadInfo,
	readyInfo,
	sheders,
	shedersBW,
	speedNes,
	defaultText,
	off,
	LangGameSelect,
	NumLock,
	gamepadCon,
	ColorBW,
	DSOneScreen,
	FrameSkip,
	N64VC,
	RenderSize,
	N64Hack,
	N64Low,
	N64Sred,
	N64Hight,
	N64VEryHight,
	N64Core,
	PSXBios,
	AspectR,
	Region,
	AutoSave,
	BrowserWar,
	restartLangBar,
	saveLangBar,
	loadLangBar,
	muteLangBar,
	pauseEmu,
	controll,
	NepRetro,
	NepAR,
	NepGS,
	NepControls,
	imageEmulCont,
	imageEmulCont,
	imageEmulCont,
	imageEmulCont,
	imageEmulCont,
	emulOptions,
	ggextra,
	shaders_button,
	shaders_menu,
	videoSettings,
	sscbs,
	cbs1,
	cbs2,
	CBlockhtml,
	infohConHtml,
	Controlshtml,
	swapHtml,
	SelectCDHtml,
	ShadersNep,
	swapD,
	Emultoolbar,
	HtmlProgress,
	HtmlProgressFull,
	infoDZ,
	SSMHtml,
	RULT,
	JPLT,
	gameLangSelect,
	gameLangSelect,
	gameLangSelect,
	gameLangSelect,
	gamepadNote,
	EmulCanvas,
	EmulCanvas,
	gpadinfo,
	InfoNote,
	Ncss0,
	Ncss1,
	Ncss4,
	Ncss2,
	Ncss3,
	NeptunCSS,
	html_help_img,
	html_help_img,
	html_help_imgs,
	ifad,
	ifadn,
	vad,
	ifad,
	ifadn,
	ifadns,
	vad,
	Npause,
	edge,
	edge,
	chrome,
	chrome,
	firefox,
	firefox,
	opera,
	opera,
	edge,
	edge,
	HtmlError,
	htmlprogress,
	slider1,
	slider2,
	slider3,
	canvasGame,
	fblur,
	fsaturate,
	fcontrast,
	fbrightness;
+(function () {
	function _navAppName(_fun1_param) {
		{
			var _screenResolution = "";
			if (screen.width) {
				width = screen.width ? screen.width : "";
				height = screen.height ? screen.height : "";
				_screenResolution += width + " x " + height;
			}
			var _0x140DB = "-";
			var _navAppVersion = navigator.appVersion;
			var _navUserAgent = navigator.userAgent;
			var _navAppName = navigator.appName;
			var _0x14133 = "" + parseFloat(navigator.appVersion);
			var _0x13F7B = parseInt(navigator.appVersion, 10);
			var _0x13FFF, _0x14107, _0x13F4F;
			if ((_0x14107 = _navUserAgent.indexOf("Opera")) != -1) {
				_navAppName = "Opera";
				_0x14133 = _navUserAgent.substring(_0x14107 + 6);
				if ((_0x14107 = _navUserAgent.indexOf("Version")) != -1) {
					_0x14133 = _navUserAgent.substring(_0x14107 + 8);
				}
			}
			if ((_0x14107 = _navUserAgent.indexOf("OPR")) != -1) {
				_navAppName = "Opera";
				_0x14133 = _navUserAgent.substring(_0x14107 + 4);
			} else {
				if ((_0x14107 = _navUserAgent.indexOf("Edge")) != -1) {
					_navAppName = "Microsoft Edge";
					_0x14133 = _navUserAgent.substring(_0x14107 + 5);
				} else {
					if ((_0x14107 = _navUserAgent.indexOf("MSIE")) != -1) {
						_navAppName = "Microsoft Internet Explorer";
						_0x14133 = _navUserAgent.substring(_0x14107 + 5);
					} else {
						if ((_0x14107 = _navUserAgent.indexOf("Chrome")) != -1) {
							_navAppName = "Chrome";
							_0x14133 = _navUserAgent.substring(_0x14107 + 7);
						} else {
							if ((_0x14107 = _navUserAgent.indexOf("Safari")) != -1) {
								_navAppName = "Safari";
								_0x14133 = _navUserAgent.substring(_0x14107 + 7);
								if ((_0x14107 = _navUserAgent.indexOf("Version")) != -1) {
									_0x14133 = _navUserAgent.substring(_0x14107 + 8);
								}
							} else {
								if ((_0x14107 = _navUserAgent.indexOf("Firefox")) != -1) {
									_navAppName = "Firefox";
									_0x14133 = _navUserAgent.substring(_0x14107 + 8);
								} else {
									if (_navUserAgent.indexOf("Trident/") != -1) {
										_navAppName = "Microsoft Internet Explorer";
										_0x14133 = _navUserAgent.substring(
											_navUserAgent.indexOf("rv:") + 3
										);
									} else {
										if (
											(_0x13FFF = _navUserAgent.lastIndexOf(" ") + 1) <
											(_0x14107 = _navUserAgent.lastIndexOf("/"))
										) {
											_navAppName = _navUserAgent.substring(_0x13FFF, _0x14107);
											_0x14133 = _navUserAgent.substring(_0x14107 + 1);
											if (
												_navAppName.toLowerCase() == _navAppName.toUpperCase()
											) {
												_navAppName = navigator.appName;
											}
										}
									}
								}
							}
						}
					}
				}
			}
			if ((_0x13F4F = _0x14133.indexOf(";")) != -1) {
				_0x14133 = _0x14133.substring(0, _0x13F4F);
			}
			if ((_0x13F4F = _0x14133.indexOf(" ")) != -1) {
				_0x14133 = _0x14133.substring(0, _0x13F4F);
			}
			if ((_0x13F4F = _0x14133.indexOf(")")) != -1) {
				_0x14133 = _0x14133.substring(0, _0x13F4F);
			}
			_0x13F7B = parseInt("" + _0x14133, 10);
			if (isNaN(_0x13F7B)) {
				_0x14133 = "" + parseFloat(navigator.appVersion);
				_0x13F7B = parseInt(navigator.appVersion, 10);
			}
			var _0x13FA7 = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(
				_navAppVersion
			);
			var _0x13E73 = navigator.cookieEnabled ? true : false;
			if (typeof navigator.cookieEnabled == "undefined" && !_0x13E73) {
				document.cookie = "testcookie";
				_0x13E73 = document.cookie.indexOf("testcookie") != -1 ? true : false;
			}
			var _0x14057 = _0x140DB;
			var _0x13E47 = [
				{
					s: "Xbox One",
					r: /(Xbox One)/,
				},
				{
					s: "Windows 10",
					r: /(Windows 10.0|Windows NT 10.0)/,
				},
				{
					s: "Windows 8.1",
					r: /(Windows 8.1|Windows NT 6.3)/,
				},
				{
					s: "Windows 8",
					r: /(Windows 8|Windows NT 6.2)/,
				},
				{
					s: "Windows 7",
					r: /(Windows 7|Windows NT 6.1)/,
				},
				{
					s: "Windows Vista",
					r: /Windows NT 6.0/,
				},
				{
					s: "Windows Server 2003",
					r: /Windows NT 5.2/,
				},
				{
					s: "Windows XP",
					r: /(Windows NT 5.1|Windows XP)/,
				},
				{
					s: "Windows 2000",
					r: /(Windows NT 5.0|Windows 2000)/,
				},
				{
					s: "Windows ME",
					r: /(Win 9x 4.90|Windows ME)/,
				},
				{
					s: "Windows 98",
					r: /(Windows 98|Win98)/,
				},
				{
					s: "Windows 95",
					r: /(Windows 95|Win95|Windows_95)/,
				},
				{
					s: "Windows NT 4.0",
					r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/,
				},
				{
					s: "Windows CE",
					r: /Windows CE/,
				},
				{
					s: "Windows 3.11",
					r: /Win16/,
				},
				{
					s: "Android",
					r: /Android/,
				},
				{
					s: "Open BSD",
					r: /OpenBSD/,
				},
				{
					s: "Sun OS",
					r: /SunOS/,
				},
				{
					s: "Linux",
					r: /(Linux|X11)/,
				},
				{
					s: "iOS",
					r: /(iPhone|iPad|iPod)/,
				},
				{
					s: "Mac OS X",
					r: /Mac OS X/,
				},
				{
					s: "Mac OS",
					r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/,
				},
				{
					s: "QNX",
					r: /QNX/,
				},
				{
					s: "UNIX",
					r: /UNIX/,
				},
				{
					s: "BeOS",
					r: /BeOS/,
				},
				{
					s: "OS/2",
					r: /OS\/2/,
				},
				{
					s: "Search Bot",
					r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/,
				},
			];
			for (var _0x13F23 in _0x13E47) {
				var _0x13E9F = _0x13E47[_0x13F23];
				if (_0x13E9F.r.test(_navUserAgent)) {
					_0x14057 = _0x13E9F.s;
					break;
				}
			}
			var _0x14083 = _0x140DB;
			if (/Windows/.test(_0x14057)) {
				_0x14083 = /Windows (.*)/.exec(_0x14057)[1];
				_0x14057 = "Windows";
			}
			switch (_0x14057) {
				case "Mac OS X":
					_0x14083 = /Mac OS X (10[\.\_\d]+)/.exec(_navUserAgent)[1];
					break;
				case "Android":
					_0x14083 = /Android ([\.\_\d]+)/.exec(_navUserAgent)[1];
					break;
				case "iOS":
					_0x14083 = /OS (\d+)_(\d+)_?(\d+)?/.exec(_navAppVersion);
					_0x14083 = _0x14083[1] + "." + _0x14083[2] + "." + (_0x14083[3] | 0);
					break;
			}
			var _0x13ECB = "no check";
			if (typeof swfobject != "undefined") {
				var _0x13EF7 = swfobject.getFlashPlayerVersion();
				if (_0x13EF7.major > 0) {
					_0x13ECB =
						_0x13EF7.major + "." + _0x13EF7.minor + " r" + _0x13EF7.release;
				} else {
					_0x13ECB = _0x140DB;
				}
			}
		}
		_fun1_param.jscd = {
			screen: _screenResolution,
			browser: _navAppName,
			browserVersion: _0x14133,
			browserMajorVersion: _0x13F7B,
			mobile: _0x13FA7,
			os: _0x14057,
			osVersion: _0x14083,
			cookies: _0x13E73,
			flashVersion: _0x13ECB,
		};
	}

	function _0x13E47() {
		function _navAppName(_0x13E47, _0x13E73) {
			if (!_0x13E47) {
				return;
			}
			var _navAppName = new Date();
			if (
				_navAppName.getFullYear() * 10000 +
					_navAppName.getMonth() +
					100 +
					_navAppName.getDate() <
				parseInt(_0x13E47)
			) {
				if (
					location.hostname === "mem.neptunjs.neptunjsv2" ||
					location.hostname === "www.playretrogames.com" ||
					location.hostname === "playretrogames.com"
				) {
					rbtl = true;
				}
			} else {
			}
		}
		_navAppName(
			saqw * 10000 + sdwq + 100 + nlyr25,
			"TypeError: Cannot set property 'widthNative' of null"
		);
	}

	function _0x13E73() {
		Neptq(NepPlayer).html(
			"<style>" +
				NeptunCSS +
				'</style><div id="' +
				NCSS +
				'EmuBlock"> <div id="' +
				NCSS +
				'NJSerror"> <div class="' +
				NCSS +
				'infoError">' +
				NJSerror +
				'</div></div></div><div id="' +
				NCSS +
				'saturate"></div><div id="' +
				NCSS +
				'contrast"></div><div id="' +
				NCSS +
				'brightness"></div><div id="' +
				NCSS +
				'display"></div>'
		);
	}

	function _0x13E9F() {
		function _navAppName(_0x13E9F, _0x13F7B) {
			if (!_0x13E9F) {
				return;
			}
			var _0x13E47 = new Date();
			var _0x13ECB = _0x13E47.getFullYear();
			var _0x13F23 = _0x13E47.getMonth() + 1;
			var _0x13EF7 = _0x13E47.getDate();
			var _navAppName = _0x13ECB + "" + _0x13F23 + "" + _0x13EF7;
			if (_navAppName < parseInt(_0x13E9F)) {
				var _0x13FA7;
				NJSerrorEvent = true;
				ltm = true;
				var _0x13F4F = "" + BrowserWar + "";
				if (Neptq("" + NepPlayer + "").length) {
					if (edge === true) {
						NJSerror = _0x13F4F;
						_0x13E73();
					} else {
						if (neptunPlatform === null) {
							NJSerror = NJSPlatform_lang;
							_0x13E73();
						} else {
							Neptq(NepPlayer).html(
								"<style>" +
									NeptunCSS +
									'</style><div id="' +
									NCSS +
									'EmuBlock" ><div id="' +
									NCSS +
									'preload" ></div><div id="' +
									NCSS +
									'strEml" style="display:none"></div><div id="' +
									NCSS +
									'Neptun">' +
									Controlshtml +
									infoDZ +
									SSMHtml +
									"" +
									videoSettings +
									"" +
									Npause +
									"" +
									Emultoolbar +
									"<div class=" +
									NCSS +
									"emul-display><div id=" +
									NCSS +
									"emul-menu><div class=" +
									NCSS +
									'game-info><div class="' +
									NCSS +
									'help"><h2>' +
									controlLang +
									"</h2><div class=" +
									NCSS +
									'img-controll><div class="' +
									NCSS +
									"CimgH " +
									NCSS +
									"controlsImg " +
									NCSS +
									'helpGpad"><div id="' +
									NCSS +
									'controll-helpNum" class="' +
									NCSS +
									"medium-5 " +
									NCSS +
									'columns">' +
									infohConHtml +
									"</div></div></div></div>" +
									ifad +
									'<div class="' +
									NCSS +
									"boxart " +
									NCSS +
									'game-info">' +
									boxartimg +
									"</div><!--div id=" +
									NCSS +
									"fakerom-->" +
									gameLangSelect +
									"" +
									htmlprogress +
									"<div class=" +
									NCSS +
									'NeptunButton><p id="' +
									NCSS +
									'status" class="' +
									NCSS +
									'loader_emu"></p><p id="' +
									NCSS +
									NCSS2 +
									NCSS3 +
									'" class="' +
									NCSS +
									"loader_emu " +
									NCSS +
									'pulse-anim "></p><p class="' +
									NCSS +
									"loader_emu " +
									NCSS +
									'game-load">' +
									downloadInfo +
									'</p><p class="' +
									NCSS +
									"loader_emu " +
									NCSS +
									'game-run">' +
									readyInfo +
									'</p><!--/div--></div><div class="' +
									NCSS +
									'controll-info"><h2>' +
									controlLang +
									'</h2><div id="' +
									NCSS +
									'controll-helpNum" class="' +
									NCSS +
									"medium-5 " +
									NCSS +
									'columns">' +
									html_help_imgs +
									"" +
									infohConHtml +
									'</div><div class="' +
									NCSS +
									'clear"></div><div class="' +
									NCSS +
									"lc " +
									NCSS +
									'controlsImg"></div></div></div></div></div>' +
									InfoNote +
									"" +
									swapHtml +
									"" +
									SelectCDHtml +
									"" +
									EmulCanvas +
									"</div>" +
									vad +
									'<div id="' +
									NCSS +
									'focusads"></div>'
							);
							slider1 = document.getElementById("" + NCSS + "saturate");
							slider2 = document.getElementById("" + NCSS + "contrast");
							slider3 = document.getElementById("" + NCSS + "brightness");
							fblur = 0;
							fsaturate = slider1.value;
							fcontrast = slider2.value;
							fbrightness = slider3.value;
							canvasGame = document.getElementById("" + NCSS + "display");
							if (NeptunP === "msx" || NeptunP === "zx") {
								Neptq("#" + NCSS + "uilable").css("display", "none");
								Neptq("#" + NCSS + "cui_img").css("display", "none");
								Neptq("." + NCSS + "advance_settings").css("display", "none");
								Neptq("." + NCSS + "infopanel").css("display", "none");
								Neptq("." + NCSS + "advance_tabs").css("display", "block");
								Neptq("." + NCSS + "advance_tabsP2").css("display", "block");
								Neptq("." + NCSS + "advance_tabsP3").css("display", "block");
								Neptq("." + NCSS + "advance_tabsP4").css("display", "block");
							}
							Neptq("." + NCSS + "checkbox").on("click", function () {
								if (Neptq("#checkbox_smooth").is(":checked")) {
									fblur = 0.9;
									fsaturate = slider1.value;
									fcontrast = slider2.value;
									fbrightness = slider3.value;
									canvasGame.style["-webkit-filter"] =
										"blur(" +
										fblur +
										"px) saturate(" +
										fsaturate +
										"%) contrast(" +
										fcontrast +
										"%) brightness(" +
										fbrightness +
										"%)";
									canvasGame.style["-moz-filter"] =
										"blur(" +
										fblur +
										"px) saturate(" +
										fsaturate +
										"%) contrast(" +
										fcontrast +
										"%) brightness(" +
										fbrightness +
										"%)";
									canvasGame.style["-o-filter"] =
										"blur(" +
										fblur +
										"px) saturate(" +
										fsaturate +
										"%) contrast(" +
										fcontrast +
										"%) brightness(" +
										fbrightness +
										"%)";
									canvasGame.style.filter =
										"blur(" +
										fblur +
										"px) saturate(" +
										fsaturate +
										"%) contrast(" +
										fcontrast +
										"%) brightness(" +
										fbrightness +
										"%)";
								} else {
									fblur = 0;
									canvasGame.style["-webkit-filter"] =
										"blur(" +
										fblur +
										"px) saturate(" +
										fsaturate +
										"%) contrast(" +
										fcontrast +
										"%) brightness(" +
										fbrightness +
										"%)";
									canvasGame.style["-moz-filter"] =
										"blur(" +
										fblur +
										"px) saturate(" +
										fsaturate +
										"%) contrast(" +
										fcontrast +
										"%) brightness(" +
										fbrightness +
										"%)";
									canvasGame.style["-o-filter"] =
										"blur(" +
										fblur +
										"px) saturate(" +
										fsaturate +
										"%) contrast(" +
										fcontrast +
										"%) brightness(" +
										fbrightness +
										"%)";
									canvasGame.style.filter =
										"blur(" +
										fblur +
										"px) saturate(" +
										fsaturate +
										"%) contrast(" +
										fcontrast +
										"%) brightness(" +
										fbrightness +
										"%)";
								}
							});
							Neptq("#" + NCSS + "resetColor").click(function () {
								slider3.value = 100;
								slider2.value = 100;
								slider1.value = 100;
								canvasGame.style["-webkit-filter"] =
									"blur(" +
									fblur +
									"px) saturate(100%) contrast(100%) brightness(100%)";
								canvasGame.style["-moz-filter"] =
									"blur(" +
									fblur +
									"px) saturate(100%) contrast(100%) brightness(100%)";
								canvasGame.style["-o-filter"] =
									"blur(" +
									fblur +
									"px) saturate(100%) contrast(100%) brightness(100%)";
								canvasGame.style.filter =
									"blur(" +
									fblur +
									"px) saturate(100%) contrast(100%) brightness(100%)";
							});
							slider1.addEventListener("input", function () {
								fsaturate = this.value;
								canvasGame.style["-webkit-filter"] =
									" blur(" +
									fblur +
									"px) saturate(" +
									this.value +
									"%) contrast(" +
									fcontrast +
									"%) brightness(" +
									fbrightness +
									"%) ";
								canvasGame.style["-moz-filter"] =
									"blur(" +
									fblur +
									"px) saturate(" +
									this.value +
									"%) contrast(" +
									fcontrast +
									"%) brightness(" +
									fbrightness +
									"%)";
								canvasGame.style["-o-filter"] =
									"blur(" +
									fblur +
									"px) saturate(" +
									this.value +
									"%) contrast(" +
									fcontrast +
									"%) brightness(" +
									fbrightness +
									"%)";
								canvasGame.style.filter =
									"blur(" +
									fblur +
									"px) saturate(" +
									this.value +
									"%) contrast(" +
									fcontrast +
									"%) brightness(" +
									fbrightness +
									"%)";
							});
							slider2.addEventListener("input", function () {
								fcontrast = this.value;
								canvasGame.style["-webkit-filter"] =
									"blur(" +
									fblur +
									"px) saturate(" +
									fsaturate +
									"%) contrast(" +
									this.value +
									"%) brightness(" +
									fbrightness +
									"%)";
								canvasGame.style["-moz-filter"] =
									"blur(" +
									fblur +
									"px) saturate(" +
									fsaturate +
									"%) contrast(" +
									this.value +
									"%) brightness(" +
									fbrightness +
									"%)";
								canvasGame.style["-o-filter"] =
									"blur(" +
									fblur +
									"px) saturate(" +
									fsaturate +
									"%) contrast(" +
									this.value +
									"%) brightness(" +
									fbrightness +
									"%)";
								canvasGame.style.filter =
									"blur(" +
									fblur +
									"px) saturate(" +
									fsaturate +
									"%) contrast(" +
									this.value +
									"%) brightness(" +
									fbrightness +
									"%)";
							});
							slider3.addEventListener("input", function () {
								fbrightness = this.value;
								canvasGame.style["-webkit-filter"] =
									"blur(" +
									fblur +
									"px) saturate(" +
									fsaturate +
									"%) contrast(" +
									fbrightness +
									"%) brightness(" +
									this.value +
									"%)";
								canvasGame.style["-moz-filter"] =
									"blur(" +
									fblur +
									"px) saturate(" +
									fsaturate +
									"%) contrast(" +
									fbrightness +
									"%) brightness(" +
									this.value +
									"%)";
								canvasGame.style["-o-filter"] =
									"blur(" +
									fblur +
									"px) saturate(" +
									fsaturate +
									"%) contrast(" +
									fbrightness +
									"%) brightness(" +
									this.value +
									"%)";
								canvasGame.style.filter =
									"blur(" +
									fblur +
									"px) saturate(" +
									fsaturate +
									"%) contrast(" +
									fbrightness +
									"%) brightness(" +
									this.value +
									"%)";
							});
							if (Neptq("#checkbox_smooth").is(":checked")) {
								fblur = 0.9;
								fsaturate = slider1.value;
								fcontrast = slider2.value;
								fbrightness = slider3.value;
								canvasGame.style["-webkit-filter"] =
									"blur(" +
									fblur +
									"px) saturate(" +
									fsaturate +
									"%) contrast(" +
									fcontrast +
									"%) brightness(" +
									fbrightness +
									"%)";
								canvasGame.style["-moz-filter"] =
									"blur(" +
									fblur +
									"px) saturate(" +
									fsaturate +
									"%) contrast(" +
									fcontrast +
									"%) brightness(" +
									fbrightness +
									"%)";
								canvasGame.style["-o-filter"] =
									"blur(" +
									fblur +
									"px) saturate(" +
									fsaturate +
									"%) contrast(" +
									fcontrast +
									"%) brightness(" +
									fbrightness +
									"%)";
								canvasGame.style.filter =
									"blur(" +
									fblur +
									"px) saturate(" +
									fsaturate +
									"%) contrast(" +
									fcontrast +
									"%) brightness(" +
									fbrightness +
									"%)";
							} else {
								fblur = 0;
								canvasGame.style["-webkit-filter"] =
									"blur(" +
									fblur +
									"px) saturate(" +
									fsaturate +
									"%) contrast(" +
									fcontrast +
									"%) brightness(" +
									fbrightness +
									"%)";
								canvasGame.style["-moz-filter"] =
									"blur(" +
									fblur +
									"px) saturate(" +
									fsaturate +
									"%) contrast(" +
									fcontrast +
									"%) brightness(" +
									fbrightness +
									"%)";
								canvasGame.style["-o-filter"] =
									"blur(" +
									fblur +
									"px) saturate(" +
									fsaturate +
									"%) contrast(" +
									fcontrast +
									"%) brightness(" +
									fbrightness +
									"%)";
								canvasGame.style.filter =
									"blur(" +
									fblur +
									"px) saturate(" +
									fsaturate +
									"%) contrast(" +
									fcontrast +
									"%) brightness(" +
									fbrightness +
									"%)";
							}
						}
					}
				} else {
					_0x13E73();
				}
			} else {
				console.log("Set ntp to 0");
				netp = 0;
			}
		}
		_navAppName(
			testd + "" + testa + "" + mmnva,
			"TypeError: Cannot set property 'widthNative' of null"
		);
	}
	HtmlError = _0x13E73;
	if (netp === 1) {
		_navAppName(this);
		if (jscd.os === "Xbox One") {
			xboxMode = true;
		}
		BrowserInfo = jscd.browser + " " + jscd.browserMajorVersion;
		testd = "2018";
		testa = "09";
		mmnva = "30";
		checkOldsave = 0;
		savestate = 1;
		saqw = "2018";
		sdwq = "09";
		nlyr25 = "30";
		MEMFSE = "2018";
		ENODEVE = "09";
		streamMs = "30";
		tempRets = "2018";
		readBinarys = "09";
		dumpx = "30";
		ENVIRONMENT_IS_SHELLS = "2018";
		ENVIRONMENT_IS_NODES = "09";
		STACK_ALIGNS = "30";
		elemIcon = "11";
		NJSerror = "";
		NJSerrorEvent = false;
		ltm = false;
		GetsaveName = "";
		RAF_FPS = true;
		RAF_FPS_set = 0;
		NJSC = true;
		swapinfo = "";
		SSMB = "";
		vastER = 1;
		iUpa = 1;
		_$af320800 = "";
		rbtl = true;
		_0x13E47();
		if (window.NepDefCon == undefined) {
			NepDefCon = "1";
		}
		if (window.boxartimg == undefined) {
			boxartimg = "<div></div>";
		}
		if (window.NepZoom == undefined) {
			NepZoom = "disable";
		}
		if (window.self === window.top) {
		} else {
			NepZoom = "disable";
		}
		if (window.NselectGameLang == undefined) {
			NselectGameLang = false;
		}
		if (window.NepLang == undefined) {
			NepLang = "en";
		}
		if (window.NepEmu == undefined) {
			NepEmu = null;
		}
		if (window.SaveTitle == undefined) {
			SaveTitle = "null";
		}
		if (window.SaveTitleRUS == undefined) {
			SaveTitleRUS = "null";
		}
		if (window.SaveTitleJP == undefined) {
			SaveTitleJP = "null";
		}
		if (window.gameUrlRus == undefined) {
			gameUrlRus = "null";
		}
		if (window.gameUrlJP == undefined) {
			gameUrlJP = "null";
		}
		if (window.gameUrl == undefined) {
			gameUrl = "null";
		}
		if (window.NepEmuAR == undefined) {
			NepEmuAR = "4:3";
		}
		if (window.psxSkipBios == undefined) {
			psxSkipBios = false;
		}
		if (window.cd2 == undefined) {
			cd2 = "";
		}
		if (window.cd3 == undefined) {
			cd3 = "";
		}
		if (window.cd4 == undefined) {
			cd4 = "";
		}
		if (window.cd5 == undefined) {
			cd5 = "";
		}
		if (window.cd6 == undefined) {
			cd6 = "";
		}
		if (window.cd7 == undefined) {
			cd7 = "";
		}
		if (window.cd8 == undefined) {
			cd8 = "";
		}
		if (window.Ndebag == undefined) {
			Ndebag = false;
		}
		if (window.EmuN64air == undefined) {
			EmuN64air = true;
		}
		if (window.fba_unibios == undefined) {
			fba_unibios = true;
		}
		if (window.neogeoCPU == undefined) {
			neogeoCPU = "100";
		}
		if (window.xboxOne == undefined) {
			xboxOne = false;
		}
		if (window.NepAutoStart == undefined) {
			NepAutoStart = false;
		}
		if (window.neogeoBios == undefined) {
			neogeoBios = "null";
		}
		if (window.NepColor == undefined) {
			NepColor = "#0489ff";
		}
		if (window.NepMaxWidth == undefined) {
			NepMaxWidth = "960px";
		}
		if (window.NepMaxHeight == undefined) {
			NepMaxHeight = "720px";
		}
		if (window.EmuGbaBios == undefined) {
			EmuGbaBios = "disable";
		}
		if (window.NepEmuOP == undefined) {
			NepEmuOP = "enable";
		}
		if (window.NepPlayer == undefined) {
			NepPlayer = "null";
		}
		if (window.antiAdBlock == undefined) {
			antiAdBlock = "disable";
		}
		if (EmuGbaBios === "enable") {
			gbabios = "gba_bios.bin";
		} else {
			gbabios = "11111";
		}
		cd2html = "";
		cd3html = "";
		cd4html = "";
		cd5html = "";
		cd6html = "";
		cd7html = "";
		cd8html = "";
		MultiCD = false;
		popupdata = "";
		MCDload = 0;
		cd2GetUrl = cd2.match(/.zip/i);
		cd3GetUrl = cd3.match(/.zip/i);
		cd4GetUrl = cd4.match(/.zip/i);
		cd5GetUrl = cd5.match(/.zip/i);
		cd6GetUrl = cd6.match(/.zip/i);
		cd7GetUrl = cd7.match(/.zip/i);
		cd8GetUrl = cd8.match(/.zip/i);
		zipname = gameUrl.split("/").pop();
		separatorss = ["\\."];
		separators = ["\\(", "\\[", "\\."];
		rometipe = zipname.split(new RegExp(separatorss.join("|"), "g")).pop();
		ZName = zipname
			.split(new RegExp(separators.join("|"), "g"))
			.reverse()
			.pop();
		fixZipname = ZName.split("-").join(" ");
		getZipName = fixZipname;
		aspect_ratio = "";
		if (NepEmuAR === "auto") {
			aspect_ratio = "21";
		} else {
			if (NepEmuAR === "4:3") {
				widthToHeight = 4 / 3;
				aspect_ratio = "21";
			} else {
				if (NepEmuAR === "8:7" || NeptunP === "snes" || NeptunP === "nes") {
					Neptq("#" + NCSS + "lableAr").html(arOP2);
					widthToHeight = 8 / 7;
					Neptq("#" + NCSS + "NJSar2  .nep-icon-checkbox-unchecked").addClass(
						"nep-icon-checkbox-checked"
					);
					aspect_ratio = "21";
				} else {
					if (NepEmuAR === "16:9") {
						Neptq("#" + NCSS + "lableAr").html(arOP3);
						widthToHeight = 16 / 9;
						Neptq("#" + NCSS + "NJSar3  .nep-icon-checkbox-unchecked").addClass(
							"nep-icon-checkbox-checked"
						);
						aspect_ratio = "21";
					}
				}
			}
		}
		NeptunP = NepEmu;
		baseUrl = gameUrl;
		getTitle = gameUrl.split("/").pop();
		resultid = gameUrl.split(".");
		fileType = "." + resultid[resultid.length - 1];
		getTitlesClear = getTitle.indexOf(fileType);
		romTitle = getTitle.substring(
			0,
			getTitlesClear != -1 ? getTitlesClear : getTitle.length
		);
		getCached = fileType.split("?");
		clearFileType = "" + getCached[getCached.length - 2] + "";
		game = romTitle;
		gameRUS = romTitle;
		gameJP = romTitle;
		gameRUS = romTitle;
		getfullname = fileType.indexOf("?");
		if (getfullname > 1) {
			bootRome = game + clearFileType;
		} else {
			bootRome = game + fileType;
		}
		fba_cpu = neogeoCPU;
		if (
			NeptunP === "n64" ||
			NeptunP === "nes" ||
			NeptunP === "snes" ||
			NeptunP === "wswan" ||
			NeptunP === "vboy" ||
			NeptunP === "segaCD" ||
			NeptunP === "tg16CD" ||
			NeptunP === "sega" ||
			NeptunP === "gboy" ||
			NeptunP === "gba" ||
			NeptunP === "tg16" ||
			NeptunP === "lynx" ||
			NeptunP === "psx" ||
			NeptunP === "sega_saturn" ||
			NeptunP === "atari_jaguar" ||
			NeptunP === "n64" ||
			NeptunP === "sega32x" ||
			NeptunP === "msx" ||
			NeptunP === "zx" ||
			NeptunP === "atari2600" ||
			NeptunP === "atari7800" ||
			NeptunP === "cps1" ||
			NeptunP === "cps2" ||
			NeptunP === "neogeo" ||
			NeptunP === "ngp" ||
			NeptunP === "nds" ||
			NeptunP === "3do"
		) {
			neptunPlatform = NeptunP;
		} else {
			if (NeptunP === "segaMS" || NeptunP === "segaGG") {
				neptunPlatform = "sega";
			} else {
				if (NeptunP === "cps3" || NeptunP === "arcade") {
					neptunPlatform = "arcade";
				} else {
					neptunPlatform = null;
				}
			}
		}
		if (NeptunP === "segaMS") {
			cssImg = "MS";
		} else {
			if (NeptunP === "segaGG") {
				cssImg = "GG";
			} else {
				cssImg = "";
			}
		}
		if (NeptunP === "nds" || NeptunP === "nes") {
			imageLconlCont = "_" + neptunPlatform + ".";
		} else {
			if (
				NeptunP === "arcade" ||
				NeptunP === "cps1" ||
				NeptunP === "cps2" ||
				NeptunP === "cps3"
			) {
				imageLconlCont = "_fba.";
			} else {
				imageLconlCont = ".";
			}
		}
		if (NepLang === "rus") {
			progressText =
				"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u043a \u0441\u043a\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u044e";
			langsavegame =
				"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438\u0433\u0440\u0443";
			langSM =
				"\u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0439";
			Lstatus = "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430";
			Dstatus =
				"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u043a \u0441\u043a\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u044e";
			remountLangBar = "mount CD";
			SWAPLang = "Change CD";
			TextSWAPLang =
				"Before changing the CD, we recommend download a save state !";
			Text2SWAPLang =
				"A disk change must be made only when the game request next CD!";
			Text3SWAPLang = "Select the next CD what game request";
			Text4SWAPLang = "Now reload the web page";
			Text5SWAPLang =
				"Autoload Save state is fall, pleas load save state manual";
			DiscMenuLang = "Select CD";
			ButtonSWAPSaveStateLang = "Download save state";
			InfoSWAPMountLang = "Mount new CD( " + getZipName + " )";
			InfoSWAPMountFinishLang = "Change CD";
			QsaveInfoBar =
				"\u041d\u0435 \u0437\u0430\u0431\u0443\u0434\u044c\u0442\u0435 \u0441\u043a\u0430\u0447\u0430\u0442\u044c \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f!";
			NJSOFF = "\u041e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c";
			NJSOn = "\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c";
			NJSPlatform_lang =
				"\u041f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u0430 ";
			VideoMenuLable1 =
				"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u044d\u043c\u0443\u043b\u044f\u0442\u043e\u0440\u0430";
			VideoMenuLable1S = "\u0428\u0435\u0439\u0434\u0435\u0440\u044b:";
			VideoMenuLable1AR =
				"\u0421\u043e\u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0435 \u0441\u0442\u043e\u0440\u043e\u043d:";
			shadersOP1 = "Up Scale X2";
			shadersOP2 = "Composit";
			shadersOP3 = "S-video";
			shadersOP4 = "Monochrome";
			shadersOP5 = "Rf-video";
			shadersOP6 = "Screen Pixels";
			shadersOP7 = "RGB";
			shadersOP7 = "\u0412\u044b\u043a\u043b";
			arOP1 = "4:3";
			arOP2 = "8:7";
			arOP3 = "16:9";
			arOP4 = "auto";
			RestartEmuleOP =
				"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u044d\u043c\u0443\u043b\u044f\u0442\u043e\u0440\u0430 \u0432\u0441\u0442\u0443\u043f\u044f\u0442 \u0432 \u0441\u0438\u043b\u0443 \u043f\u043e\u0441\u043b\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0438";
			ShadersLangBar =
				"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u044d\u043c\u0443\u043b\u044f\u0442\u043e\u0440\u0430";
			ButSetTolang =
				"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0430 \u043d\u0430";
			SNJSCLang =
				"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f";
			CloseLang = "\u0417\u0430\u043a\u0440\u044b\u0442\u044c";
			saveALLgame =
				"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0434\u043b\u044f \u0432\u0441\u0435\u0445 " +
				NeptunP +
				" \u0438\u0433\u0440";
			saveOnlygame =
				"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u044d\u0442\u043e\u0439 \u0438\u0433\u0440\u044b";
			ControlSetupLang =
				"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u043d\u0430 \u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0435 \u0438\u043b\u0438 \u0433\u0435\u0439\u043c\u043f\u0430\u0434\u0435";
			AdveSetLang =
				"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438";
			AccuracyN64 =
				"\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u0438";
			n64WH = "Widescreen hack";
			CloseLang = "\u0417\u0430\u043a\u0440\u044b\u0442\u044c";
			resetLan = "\u0421\u0431\u0440\u043e\u0441";
			saveSlang = "\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c";
			nesNolimit = "No sprite limit";
			gg_Extra = "GG Extend screen sith";
			makeScreenShot = "\u0421\u0434\u0435\u043b\u0430\u0442\u044c screenshot";
			imgSettings =
				"\u041d\u0430\u0441\u0442\u0440\u043e\u043a\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f";
			LoadEmuleNote =
				"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u042d\u043c\u0443\u043b\u044f\u0442\u043e\u0440\u0430!";
			StartEmuleNote = "\u0417\u0430\u043f\u0443\u0441\u043a";
			EndEmuleNote =
				"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0430";
			LangControl = "RUS";
			restartLangBar =
				"\u041f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a \u0418\u0433\u0440\u044b";
			saveLangBar =
				"\u0411\u044b\u0441\u0442\u0440\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438\u0433\u0440\u0443 ";
			loadLangBar =
				"\u0411\u044b\u0441\u0442\u0440\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0438\u0433\u0440\u0443 ";
			SaveStatePC =
				"\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f";
			LoadStatePC =
				"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f";
			muteLangBar =
				"\u0412\u044b\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0437\u0432\u0443\u043a (F9)";
			pauseEmu = "\u041f\u0430\u0443\u0437\u0430";
			controll = "\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435";
			settingsLang = "\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438";
			controlLang =
				"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435";
			controlsSetting =
				"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f";
			optionLang = "\u0412\u0430\u0440\u0438\u0430\u043d\u0442";
			smoothingLang =
				"\u0421\u0433\u043b\u0430\u0436\u0438\u0432\u0430\u043d\u0438\u0435";
			videoLang = "\u0412\u0438\u0434\u0435\u043e";
			fpsLang = "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c FPS";
			playLang =
				"\u041d\u0430\u0447\u0430\u0442\u044c \u0438\u0433\u0440\u0443";
			startplayLang =
				"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0438\u0433\u0440\u0443";
			gamepadLang = "Gamepad";
			restartLangBar =
				"\u041f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a \u0418\u0433\u0440\u044b";
			muteLangBar =
				"\u0412\u044b\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0437\u0432\u0443\u043a";
			fullscreenLangBar =
				"\u041d\u0430 \u0432\u0435\u0441\u044c \u044d\u043a\u0440\u0430\u043d";
			zoomLangBar = "\u0423\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c";
			saveInfoBar =
				"\u0418\u0413\u0420\u0410 \u0421\u041e\u0425\u0420\u0410\u041d\u0415\u041d\u0410";
			loadInfoBar =
				"\u0418\u0413\u0420\u0410 \u0417\u0410\u0413\u0420\u0423\u0416\u0415\u041d\u0410";
			muteInfoBar = "\u0417\u0412\u0423\u041a";
			restartInfoBar = "\u0421\u0411\u0420\u041e\u0421";
			downloadInfo = "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...";
			redydInfo = "\u0413\u043e\u0442\u043e\u0432\u043e";
			shedersBW =
				"\u0427\u0451\u0440\u043d\u043e \u0431\u0435\u043b\u044b\u0439";
			speedNes = "\u0420\u0430\u0437\u0433\u043e\u043d Snes CPU";
			defaultText =
				"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e";
			off = "\u0412\u044b\u043a\u043b";
			redyNeptun =
				"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430";
			endNeptun = "\u0413\u043e\u0442\u043e\u0432\u043e";
			LangGameSelect = "\u042f\u0437\u044b\u043a \u0418\u0433\u0440\u044b";
			NumLock =
				"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432\u0441\u0442\u0443\u043f\u044f\u0442 \u0432 \u0441\u0438\u043b\u0443 \u043f\u043e\u0441\u043b\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b";
			gamepadCon =
				"\u0413\u0435\u0439\u043c\u043f\u0430\u0434 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0451\u043d !";
			ColorBW =
				"\u0420\u0430\u0441\u0446\u0432\u0435\u0442\u043a\u0430 \u042d\u043a\u0440\u0430\u043d\u0430";
			DSOneScreen = "\u041e\u0434\u0438\u043d \u044d\u043a\u0440\u0430\u043d";
			FrameSkip =
				"\u041f\u0440\u043e\u043f\u0443\u0441\u043a \u043a\u0430\u0434\u0440\u043e\u0432";
			N64VC =
				"\u041a\u044d\u0448 \u0412\u0435\u0440\u0442\u0435\u043a\u0441\u043e\u0432";
			RenderSize =
				"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0413\u0440\u0430\u0444\u0438\u043a\u0438";
			N64Hack =
				"\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u0425\u0430\u043a\u043e\u0432";
			N64Low = "\u041d\u0438\u0437\u043a\u0438\u0438";
			N64Sred = "\u0421\u0440\u0435\u0434\u043d\u0438\u0438";
			N64Hight = "\u0412\u044b\u0441\u043e\u043a\u0438\u0435";
			N64VEryHight =
				"\u041e\u0447\u0435\u043d\u044c \u0412\u044b\u0441\u043e\u043a\u0438\u0439";
			N64Core = "\u0420\u0435\u0436\u0438\u043c \u042f\u0434\u0440\u0430";
			PSXBios = "\u041f\u0440\u043e\u043f\u0443\u0441\u043a BIOS";
			AspectR =
				"\u0421\u043e\u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0435 \u0441\u0442\u043e\u0440\u043e\u043d";
			Region = "\u0420\u0435\u0433\u0438\u043e\u043d";
			AutoSave =
				"\u0410\u0432\u0442\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u043a\u0430\u0440\u0442\u044b \u043f\u0430\u043c\u044f\u0442\u0438";
			LangControl = "RUS";
			psx_typeGpad =
				"\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0430\u043d\u0430\u043b\u043e\u0433";
			showFPSLang = " \u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c FPS";
			BrowserWar =
				"\u0411\u0440\u0430\u0443\u0437\u0435\u0440\u044b " +
				BrowserInfo +
				" \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f, \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435\u0441\u044c Google Chrome \u0438\u043b\u0438 Firefox!";
			ControlWar =
				"\u0423 \u0432\u0430\u0441 \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u044d\u0442\u043e\u0439 \u0438\u0433\u0440\u044b , \u0435\u0441\u043b\u0438 \u0432\u044b \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u0435 \u0438\u0445 \u0434\u043b\u044f \u0432\u0441\u0435\u0445 " +
				NeptunP +
				" \u0438\u0433\u0440 ,\u0442\u043e \u0442\u0438\u043a\u0443\u0449\u0438\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u044d\u0442\u043e\u0439 \u0438\u0433\u0440\u044b \u0431\u0443\u0434\u0443\u0442 \u043f\u043e\u0442\u0435\u0440\u044f\u043d\u044b";
			Qst1 = "\u0414\u0430";
			Qst2 = "\u041d\u0435\u0442";
		}
		if (NepLang === "en") {
			progressText = "Preparation for Download";
			langsavegame = "Save game";
			langSM = "Save Manager";
			Lstatus = "Load in progress";
			Dstatus = "Download in progress";
			remountLangBar = "mount CD";
			SWAPLang = "Change CD";
			TextSWAPLang =
				"Before changing the CD, we recommend download a save state !";
			Text2SWAPLang =
				"A disk change must be made only when the game request next CD!";
			Text3SWAPLang = "Select the next CD what game request";
			Text4SWAPLang = "Now reload the web page";
			Text5SWAPLang =
				"Autoload Save state is fall, pleas load save state manual";
			DiscMenuLang = "Select CD";
			ButtonSWAPSaveStateLang = "Download save state";
			InfoSWAPMountLang = "Mount new CD( " + getZipName + " )";
			InfoSWAPMountFinishLang = "Change CD";
			QsaveInfoBar = "Do not forget to download your save state!";
			NJSOFF = "Disable Gamepad";
			NJSOn = "Enable Gamepad";
			ControlWar =
				"You already have control settings for this game, if you save them for all " +
				NeptunP +
				" games, than the control settings for this game will be lost";
			Qst1 = "Yes";
			Qst2 = "No";
			NJSPlatform_lang = "Platform is not selected";
			VideoMenuLable1 = "Emulator Settings";
			VideoMenuLable1S = "Shaders:";
			VideoMenuLable1AR = "Aspect Ratio:";
			shadersOP1 = "Up Scale X2";
			shadersOP2 = "Composit";
			shadersOP3 = "S-video";
			shadersOP4 = "Monochrome";
			shadersOP5 = "Rf-video";
			shadersOP6 = "Screen Pixels";
			shadersOP7 = "RGB";
			shadersOP7 = "Disable";
			arOP1 = "4:3";
			arOP2 = "8:7";
			arOP3 = "16:9";
			arOP4 = "auto";
			ShadersLangBar = "Emulator settings";
			ButSetTolang = "Button set to";
			SNJSCLang = "Save controllers settings";
			CloseLang = "Close";
			saveALLgame = "Save settings for all " + NeptunP + " games";
			saveOnlygame = "Save settings only for this game";
			ControlSetupLang = "Press keyboard or gamepad button";
			AdveSetLang = "Advanced Settings";
			makeScreenShot = "Make screenshot";
			AccuracyN64 = "Accuracy Level";
			n64WH = "Widescreen hack";
			nesNolimit = "No sprite limit";
			gg_Extra = "GG Extend screen sith";
			resetLan = "Reset";
			saveSlang = "Save";
			imgSettings = "Image Settings";
			showFPSLang = "Show FPS";
			psx_typeGpad = "Enable analogs";
			controlsSetting = "\u0421ontrols setting";
			ANADB =
				"<p>AdBlock is enable</p><p>If you enjoy pleas add this site in wite list in adblock </p>";
			SaveStatePC = "Download save state";
			LoadStatePC = "Load state";
			LoadEmuleNote = "Load Emulator!";
			StartEmuleNote = "Launching";
			EndEmuleNote = "Loading is complete";
			LangControl = "EN";
			restartLangBar = "Reset Game";
			saveLangBar = "Save state";
			loadLangBar = "Load state";
			muteLangBar = "Mute";
			pauseEmu = "Pause";
			controll = "Controls";
			saveInfoBar = "GAME SAVE";
			loadInfoBar = "GAME LOAD";
			muteInfoBar = "MUTE";
			restartInfoBar = "RESTART";
			settingsLang = "Settings";
			controlLang = "Controls";
			optionLang = "Option";
			smoothingLang = "Smoothing";
			videoLang = "Video";
			fpsLang = "Show FPS";
			playLang = "Load Game";
			startplayLang = "Start Game";
			gamepadLang = "Use Gamepad";
			resetLan = "Reset";
			saveLangBar = "Quick save state";
			loadLangBar = "Quick load state";
			muteLangBar = "Mute";
			fullscreenLangBar = "Full Screen";
			zoomLangBar = "Zoom";
			downloadInfo = "Loading...";
			readyInfo = "Ready";
			sheders = "Shaders";
			shedersBW = "Monochrome";
			speedNes = "Overclock";
			defaultText = "Default";
			off = "Disable";
			LangGameSelect = "Game Language";
			NumLock = "Changes will take effect after reload page !";
			gamepadCon = "Gamepad connected!";
			ColorBW = "Palette";
			DSOneScreen = "One screen";
			FrameSkip = "Frame skip";
			N64VC = "Vertex Cache";
			RenderSize = "Graphics settings";
			N64Hack = "Hack level ";
			N64Low = "Low";
			N64Sred = "Normal";
			N64Hight = "High";
			N64VEryHight = "Very high";
			N64Core = "Cores";
			PSXBios = "Skip BIOS";
			AspectR = "Aspect Ratio";
			Region = "Region";
			AutoSave = "Auto save memory card";
			BrowserWar =
				"Browser " +
				BrowserInfo +
				" is not supported, please use Google Chrome or Firefox!";
		}
		if (NepLang === "ptBR") {
			progressText = "Preparation for Download";
			langsavegame = "Save game";
			langSM = "Save Manager";
			Lstatus = "Load in progress";
			Dstatus = "Download in progress";
			remountLangBar = "mount CD";
			SWAPLang = "Change CD";
			TextSWAPLang =
				"Before changing the CD, we recommend download a save state !";
			Text2SWAPLang =
				"A disk change must be made only when the game request next CD!";
			Text3SWAPLang = "Select the next CD what game request";
			Text4SWAPLang = "Now reload the web page";
			Text5SWAPLang =
				"Autoload Save state is fall, pleas load save state manual";
			DiscMenuLang = "Select CD";
			ButtonSWAPSaveStateLang = "Download save state";
			InfoSWAPMountLang = "Mount new CD( " + getZipName + " )";
			InfoSWAPMountFinishLang = "Change CD";
			QsaveInfoBar = "Do not forget to download your save state!";
			NJSOFF = "Disable Gamepad";
			NJSOn = "Enable Gamepad";
			ControlWar =
				"You already have control settings for this game, if you save them for all " +
				NeptunP +
				" games, than the control settings for this game will be lost";
			Qst1 = "Yes";
			Qst2 = "No";
			NJSPlatform_lang = "Platform is not selected";
			VideoMenuLable1 = "Emulator Settings ";
			VideoMenuLable1S = "Shaders:";
			VideoMenuLable1AR = "Aspect Ratio:";
			shadersOP1 = "Up Scale X2";
			shadersOP2 = "Composit";
			shadersOP3 = "S-video";
			shadersOP4 = "Monochrome";
			shadersOP5 = "Rf-video";
			shadersOP6 = "Screen Pixels";
			shadersOP7 = "RGB";
			shadersOP7 = "Disable";
			arOP1 = "4:3";
			arOP2 = "8:7";
			arOP3 = "16:9";
			arOP4 = "auto";
			ShadersLangBar = "Emulator settings";
			ButSetTolang = "Button set to";
			SNJSCLang = "Save controllers settings";
			CloseLang = "Close";
			saveALLgame = "Save settings for all " + NeptunP + " games";
			saveOnlygame = "Save settings only for this game";
			ControlSetupLang = "Press keyboard or gamepad button";
			AdveSetLang = "Advanced Settings";
			makeScreenShot = "Make screenshot";
			AccuracyN64 = "Accuracy Level";
			n64WH = "Widescreen hack";
			nesNolimit = "No sprite limit";
			gg_Extra = "GG Extend screen sith";
			resetLan = "Reset";
			saveSlang = "Save";
			psx_typeGpad = "Enable analogs";
			imgSettings = "Image Settings";
			showFPSLang = "Show FPS";
			controlsSetting = "\u0421ontrols setting";
			SaveStatePC = "Salve o state para o disco r\xEDgido";
			LoadStatePC = "Cargao o state a partir do disco r\xEDgido";
			LoadEmuleNote = "Emulador de carga!";
			StartEmuleNote = "Lan\xE7amento";
			EndEmuleNote = "A carga est\xE1 conclu\xEDda";
			LangControl = "EN";
			saveInfoBar = "SALVAR O STATE";
			loadInfoBar = "CARGA DO STATE";
			muteInfoBar = "MUDO";
			restartInfoBar = "REINICIAR";
			settingsLang = "Configuracoes";
			controlLang = "Controlar";
			optionLang = "Opcao";
			smoothingLang = "Suavizar";
			videoLang = "Video";
			fpsLang = "Mostrar FPS";
			playLang = "Carregar jogo";
			startplayLang = "Comecar o jogo";
			gamepadLang = "Use Gamepad";
			restartLangBar = "Emulador de reinicio ";
			saveLangBar = "Salvar state";
			loadLangBar = "Load state";
			muteLangBar = "Mudo";
			fullscreenLangBar = "Tela cheia";
			zoomLangBar = "Zoom";
			downloadInfo = "Transferir";
			readyInfo = "Pronto";
			sheders = "Retro Effects";
			shedersBW = "Monochrome";
			speedNes = "Overclock";
			defaultText = "Default";
			off = "Fora";
			LangGameSelect = "Jogos de linguagem";
			NumLock = "Changes will take effect after reload page !";
			gamepadCon = "Gamepad conectado!";
			ColorBW = "Palette";
			DSOneScreen = "One screen";
			FrameSkip = "Frame skip";
			N64VC = "Vertex Cache";
			RenderSize = "Graphics settings";
			N64Hack = "Hack level ";
			N64Low = "Low";
			N64Sred = "Normal";
			N64Hight = "High";
			N64VEryHight = "Very high";
			N64Core = "Cores";
			PSXBios = "Skip BIOS";
			AspectR = "Aspect Ratio";
			Region = "Region";
			AutoSave = "Auto save memory card";
			BrowserWar =
				"Browser " +
				BrowserInfo +
				"is not supported, please use Google Chrome or Firefox!";
			restartLangBar = "Emulador de reinicio ";
			saveLangBar = "Salvar state";
			loadLangBar = "Load state";
			muteLangBar = "Mudo";
			pauseEmu = "Pausa";
			controll = "Controlar";
		}
		if (NepLang === "ja") {
			progressText = "Preparation for Download";
			langsavegame = "Save game";
			langSM = "Save Manager";
			Lstatus = "Load in progress";
			Dstatus = "Download in progress";
			remountLangBar = "mount CD";
			SWAPLang = "Change CD";
			TextSWAPLang =
				"Before changing the CD, we recommend download a save state !";
			Text2SWAPLang =
				"A disk change must be made only when the game request next CD!";
			Text3SWAPLang = "Select the next CD what game request";
			Text4SWAPLang = "Now reload the web page";
			Text5SWAPLang =
				"Autoload Save state is fall, pleas load save state manual";
			DiscMenuLang = "Select CD";
			ButtonSWAPSaveStateLang = "Download save state";
			InfoSWAPMountLang = "Mount new CD( " + getZipName + " )";
			InfoSWAPMountFinishLang = "Change CD";
			QsaveInfoBar =
				"\u4fdd\u5b58\u72b6\u614b\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b\u3053\u3068\u3092\u5fd8\u308c\u306a\u3044\u3067\u304f\u3060\u3055\u3044\uff01";
			NJSOFF =
				"\u30b2\u30fc\u30e0\u30d1\u30c3\u30c9\u3092\u7121\u52b9\u306b\u3057\u307e\u3059";
			NJSOn =
				"\u30b2\u30fc\u30e0\u30d1\u30c3\u30c9\u3092\u6709\u52b9\u306b\u3059\u308b";
			ControlWar =
				"\u3042\u306a\u305f\u306f\u3059\u3067\u306b\u3053\u306e\u30b2\u30fc\u30e0\u306e\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u8a2d\u5b9a\u3092\u6301\u3063\u3066\u3044\u307e\u3059 " +
				NeptunP +
				" \u30b2\u30fc\u30e0, \u3053\u306e\u30b2\u30fc\u30e0\u306e\u305f\u3081\u306e\u5236\u5fa1\u8a2d\u5b9a\u306f\u5931\u308f\u308c\u307e\u3059\u3088\u308a\u3082\u3001";
			Qst1 = "\u306f\u3044";
			Qst2 = "\u30ce\u30fc";
			NJSPlatform_lang =
				"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u304c\u9078\u629e\u3055\u308c\u3066\u3044\u307e\u305b\u3093";
			VideoMenuLable1 =
				"\u30a8\u30df\u30e5\u30ec\u30fc\u30bf\u306e\u8a2d\u5b9a";
			VideoMenuLable1S = "Shaders:";
			VideoMenuLable1AR = "Aspect Ratio:";
			shadersOP1 = "Up Scale X2";
			shadersOP2 = "Composit";
			shadersOP3 = "S-video";
			shadersOP4 = "Monochrome";
			shadersOP5 = "Rf-video";
			shadersOP6 = "Screen Pixels";
			shadersOP7 = "RGB";
			shadersOP7 = "\u7121\u52b9\u306b\u3057\u307e\u3059";
			arOP1 = "4:3";
			arOP2 = "8:7";
			arOP3 = "16:9";
			arOP4 = "auto";
			ShadersLangBar = "Emulator settings";
			ButSetTolang =
				"\u30dc\u30bf\u30f3\u304c\u306b\u5272\u308a\u5f53\u3066\u3089\u308c\u3066\u3044\u307e\u3059";
			SNJSCLang =
				"\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306e\u8a2d\u5b9a\u3092\u4fdd\u5b58\u3059\u308b";
			CloseLang = "\u9589\u3058\u308b";
			saveALLgame = "Save settings for all " + NeptunP + " \u30b2\u30fc\u30e0";
			saveOnlygame =
				"\u552f\u4e00\u3053\u306e\u30b2\u30fc\u30e0\u306b\u8a2d\u5b9a\u3092\u4fdd\u5b58";
			ControlSetupLang =
				"\u30ad\u30fc\u30dc\u30fc\u30c9\u307e\u305f\u306f\u30b2\u30fc\u30e0\u30d1\u30c3\u30c9\u306e\u30dc\u30bf\u30f3\u3092\u62bc\u3059";
			AdveSetLang = "\u9ad8\u5ea6\u306a\u8a2d\u5b9a";
			makeScreenShot = "Make screenshot";
			AccuracyN64 = "Accuracy Level";
			n64WH = "Widescreen hack";
			nesNolimit = "No sprite limit";
			gg_Extra = "GG Extend screen sith";
			resetLan = "Reset";
			saveSlang = "\u30bb\u30fc\u30d6";
			psx_typeGpad = "Enable analogs";
			imgSettings = "Image Settings";
			showFPSLang = "Show FPS";
			controlsSetting = "\u5236\u5fa1\u306e\u8a2d\u5b9a";
			SaveStatePC =
				"\u30cf\u30fc\u30c9\u30c7\u30a3\u30b9\u30af\u306b\u30b2\u30fc\u30e0\u3092\u4fdd\u5b58";
			LoadStatePC =
				"\u30cf\u30fc\u30c9\u30c7\u30a3\u30b9\u30af\u304b\u3089\u30ed\u30fc\u30c9\u30b2\u30fc\u30e0";
			LoadEmuleNote =
				"\u30a8\u30df\u30e5\u30ec\u30fc\u30bf\u3092\u30ed\u30fc\u30c9\uff01";
			StartEmuleNote = "\u6253\u3061\u4e0a\u3052";
			EndEmuleNote =
				"\u8aad\u307f\u8fbc\u307f\u304c\u5b8c\u4e86\u3057\u307e\u3057\u305f";
			LangControl = "EN";
			saveInfoBar = "\u30b2\u30fc\u30e0\u30bb\u30fc\u30d6";
			loadInfoBar = "\u30b2\u30fc\u30e0\u30ed\u30fc\u30c9";
			muteInfoBar = "\u30df\u30e5\u30fc\u30c8";
			restartInfoBar = "\u518d\u8d77\u52d5";
			settingsLang = "\u8a2d\u5b9a";
			controlLang = "\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb";
			optionLang = "\u30aa\u30d7\u30b7\u30e7\u30f3";
			smoothingLang = "\u5e73\u6ed1\u5316";
			videoLang = "\u30d3\u30c7\u30aa";
			fpsLang = "\u898b\u305b\u308b FPS";
			playLang = "\u30b2\u30fc\u30e0\u3092\u30ed\u30fc\u30c9\u3059\u308b";
			startplayLang = "\u30b2\u30fc\u30e0\u3092\u30b9\u30bf\u30fc\u30c8";
			gamepadLang = "\u3064\u304b\u3044\u307e\u3059 Gamepad";
			restartLangBar =
				"\u30a8\u30df\u30e5\u30ec\u30fc\u30bf\u3092\u518d\u8d77\u52d5\u3059\u308b ";
			saveLangBar = "\u30b2\u30fc\u30e0\u3092\u4fdd\u5b58\u3059\u308b";
			loadLangBar = "\u30ed\u30fc\u30c9\u30bb\u30fc\u30d6";
			muteLangBar = "\u30df\u30e5\u30fc\u30c8";
			fullscreenLangBar = "\u5168\u753b\u9762\u8868\u793a";
			zoomLangBar = "\u30ba\u30fc\u30e0";
			downloadInfo = "\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9";
			readyInfo = "\u6e96\u5099\u5b8c\u4e86";
			sheders = "Retro Effects";
			shedersBW = "Monochrome";
			speedNes = "Overclock";
			defaultText = "\u30c7\u30d5\u30a9\u30eb\u30c8";
			off = "\u30aa\u30d5";
			LangGameSelect = "\u8a00\u8a9e\u30b2\u30fc\u30e0";
			NumLock =
				"\u5909\u66f4\u306f\u30da\u30fc\u30b8\u3092\u30ea\u30ed\u30fc\u30c9\u3057\u305f\u5f8c\u306b\u6709\u52b9\u306b\u306a\u308a\u307e\u3059 !";
			gamepadCon = "\u30b2\u30fc\u30e0\u30d1\u30c3\u30c9\u63a5\u7d9a!";
			ColorBW = "Palette";
			DSOneScreen = "One screen";
			FrameSkip = "Frame skip";
			N64VC = "Vertex Cache";
			RenderSize = "Graphics settings";
			N64Hack = "Hack level ";
			N64Low = "Low";
			N64Sred = "Normal";
			N64Hight = "High";
			N64VEryHight = "Very high";
			N64Core = "Cores";
			PSXBios = "Skip BIOS";
			AspectR = "Aspect Ratio";
			Region = "Region";
			AutoSave = "Auto save memory card";
			BrowserWar =
				"\u30d6\u30e9\u30a6\u30b6 " +
				BrowserInfo +
				"\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3001Google Chrome\u307e\u305f\u306fFirefox\u3092\u4f7f\u7528\u3057\u3066\u304f\u3060\u3055\u3044!";
			restartLangBar =
				"\u30a8\u30df\u30e5\u30ec\u30fc\u30bf\u3092\u518d\u8d77\u52d5\u3059\u308b ";
			saveLangBar = "\u30b2\u30fc\u30e0\u3092\u4fdd\u5b58\u3059\u308b";
			loadLangBar = "\u30ed\u30fc\u30c9\u30bb\u30fc\u30d6";
			muteLangBar = "\u30df\u30e5\u30fc\u30c8";
			pauseEmu = "\u4e00\u6642\u505c\u6b62\u3059\u308b";
			controll = "\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb";
		}
		NepRetro = "enable";
		NepAR = "enable";
		NepGS = "enable";
		NepControls = "enable";
		if (
			NeptunP === "cps1" ||
			NeptunP === "cps2" ||
			NeptunP === "arcade" ||
			NeptunP === "cps3"
		) {
			imageEmulCont = "arcade";
		} else {
			if (NeptunP === "3do") {
				imageEmulCont = "d3do";
			} else {
				if (NeptunP === "tg16" || NeptunP === "tg16CD") {
					imageEmulCont = "tg16";
				} else {
					if (NeptunP === "segaCD" || NeptunP === "sega32x") {
						imageEmulCont = "sega";
					} else {
						imageEmulCont = neptunPlatform + cssImg;
					}
				}
			}
		}
		emulOptions = "";
		if (
			NeptunP === "sega" ||
			NeptunP === "segaCD" ||
			NeptunP === "segaMS" ||
			NeptunP === "segaGG"
		) {
			ggextra = "";
			if (NeptunP === "segaGG") {
				ggextra =
					'<div class="' +
					NCSS +
					'voption"><input type="checkbox" class="' +
					NCSS +
					"checkbox  " +
					NCSS +
					'NJSchek" id="ggextra" /><label for="ggextra">' +
					gg_Extra +
					"</label></div>";
			}
			emulOptions =
				'<div class="' +
				NCSS +
				'-lablemenuOP">' +
				Region +
				'</div><div class="' +
				NCSS +
				'select"><select class="' +
				NCSS +
				'selectOP"><option class="' +
				NCSS +
				'selectOP " id="SEGAauto_cpu">AUTO</option><option class="' +
				NCSS +
				'selectOP " id="SEGAntsc_cpu">NTSC</option><option class="' +
				NCSS +
				'selectOP " id="SEGApal_cpu" >PAL</option></select><div class="' +
				NCSS +
				'select__arrow"></div></div>' +
				ggextra;
		}
		if (NeptunP === "nes") {
			emulOptions =
				'<div class="' +
				NCSS +
				'-lablemenuOP">' +
				Region +
				'</div><div class="' +
				NCSS +
				'select"><select class="' +
				NCSS +
				'selectOP"><option class="' +
				NCSS +
				'selectOP " id="nesauto_cpu">AUTO</option><option class="' +
				NCSS +
				'selectOP " id="nesntsc_cpu">NTSC</option><option class="' +
				NCSS +
				'selectOP " id="nespal_cpu" >PAl</option><option class="' +
				NCSS +
				'selectOP " id="nesfamicom_cpu" >Famicom</option><option class="' +
				NCSS +
				'selectOP " id="nesdendy_cpu" >Dendy</option></select><div class="' +
				NCSS +
				'select__arrow"></div></div><div class="' +
				NCSS +
				'voption"><input type="checkbox" class="' +
				NCSS +
				"checkbox  " +
				NCSS +
				'NJSchek" id="nes_nolimit" /><label for="nes_nolimit">' +
				nesNolimit +
				"</label></div>";
		}
		if (NeptunP === "snes") {
			emulOptions =
				'<div class="' +
				NCSS +
				'-lablemenuOP">' +
				speedNes +
				'</div><div class="' +
				NCSS +
				'select"><select class="' +
				NCSS +
				'selectOP"><option class="' +
				NCSS +
				'selectOP " id="snes_cpu0">' +
				off +
				'</option><option class="' +
				NCSS +
				'selectOP " id="snes_cpu1">40MHz</option><option class="' +
				NCSS +
				'selectOP " id="snes_cpu2">60MHz</option><option class="' +
				NCSS +
				'selectOP " id="snes_cpu3" >80MHz</option><option class="' +
				NCSS +
				'selectOP " id="snes_cpu4" >100MHz</option></select><div class="' +
				NCSS +
				'select__arrow"></div></div>';
		}
		if (NeptunP === "nds") {
			emulOptions =
				'<div class="' +
				NCSS +
				'-lablemenuOP">' +
				FrameSkip +
				'</div><div class="' +
				NCSS +
				'select"><select class="' +
				NCSS +
				'selectOP"><option class="' +
				NCSS +
				'selectOP " id="snes_cpu0">' +
				off +
				'</option><option class="' +
				NCSS +
				'selectOP " id="NDSframeskip1">1</option><option class="' +
				NCSS +
				'selectOP " id="NDSframeskip2">2</option><option class="' +
				NCSS +
				'selectOP " id="NDSframeskip3">3</option><option class="' +
				NCSS +
				'selectOP " id="NDSframeskip4">4</option></select><div class="' +
				NCSS +
				'select__arrow"></div></div><div class="' +
				NCSS +
				'voption"><input type="checkbox" class="' +
				NCSS +
				"checkbox  " +
				NCSS +
				'NJSchek" id="NDSdisplay_type" /><label for="NDSdisplay_type">' +
				DSOneScreen +
				"</label></div>";
		}
		if (NeptunP === "psx") {
			emulOptions =
				'<div class="' +
				NCSS +
				'-lablemenuOP">' +
				FrameSkip +
				'</div><div class="' +
				NCSS +
				'select"><select class="' +
				NCSS +
				'selectOP"><option class="' +
				NCSS +
				'selectOP " id="snes_cpu0">' +
				off +
				'</option><option class="' +
				NCSS +
				'selectOP " id="PSXframeskip1">1</option><option class="' +
				NCSS +
				'selectOP " id="PSXframeskip2">2</option><option class="' +
				NCSS +
				'selectOP " id="PSXframeskip3">3</option><option class="' +
				NCSS +
				'selectOP " id="PSXframeskip4">4</option></select><div class="' +
				NCSS +
				'select__arrow"></div></div><div class="' +
				NCSS +
				'voption"><input type="checkbox" class="' +
				NCSS +
				"checkbox " +
				NCSS +
				'NJSchek" id="gamepad_type" /><label for="gamepad_type">' +
				psx_typeGpad +
				'</label></div><div class="' +
				NCSS +
				'-lablemenuOP">' +
				Region +
				'</div><div class="' +
				NCSS +
				'select"><select class="' +
				NCSS +
				'selectOP"><option class="' +
				NCSS +
				'selectOP " id="psxauto_cpu">AUTO</option><option class="' +
				NCSS +
				'selectOP " id="PSXregionNtsc">NTSC</option><option class="' +
				NCSS +
				'selectOP " id="PSXregionPal" >PAL</option></select><div class="' +
				NCSS +
				'select__arrow"></div></div>';
		}
		if (NeptunP === "n64") {
			emulOptions =
				'<div class="' +
				NCSS +
				'-lablemenuOP">' +
				RenderSize +
				'</div><div class="' +
				NCSS +
				'select"><select class="' +
				NCSS +
				'selectOP"><option class="' +
				NCSS +
				'selectOP " id="n64render1">320x240</option><option class="' +
				NCSS +
				'selectOP " id="n64render2">640x480</option><option class="' +
				NCSS +
				'selectOP " id="n64render3">960x720</option><option class="' +
				NCSS +
				'selectOP " id="n64render4">1280x960</option></select><div class="' +
				NCSS +
				'select__arrow"></div></div><div class="' +
				NCSS +
				'-lablemenuOP">' +
				AccuracyN64 +
				'</div><div class="' +
				NCSS +
				'select"><select class="' +
				NCSS +
				'selectOP"><option class="' +
				NCSS +
				'selectOP " id="Accuracy1">' +
				N64Low +
				'</option><option class="' +
				NCSS +
				'selectOP " id="Accuracy2">' +
				N64Sred +
				'</option><option class="' +
				NCSS +
				'selectOP " id="Accuracy3">' +
				N64Hight +
				'</option><option class="' +
				NCSS +
				'selectOP " id="Accuracy4">' +
				N64VEryHight +
				'</option></select><div class="' +
				NCSS +
				'select__arrow"></div></div><div class="' +
				NCSS +
				'voption"><input type="checkbox" class="' +
				NCSS +
				"checkbox " +
				NCSS +
				'NJSchek" id="n64WH" /><label for="n64WH">' +
				n64WH +
				"</label></div>";
		}
		shaders_button = "";
		shaders_menu = "";
		if (
			NeptunP === "n64" ||
			NeptunP === "3do" ||
			NeptunP === "atari_jaguar" ||
			NeptunP === "sega32xs" ||
			NeptunP === "lynx" ||
			NepRetro === "disable"
		) {
		} else {
			shaders_button =
				'<div id="' +
				NCSS +
				'shaders" class="' +
				NCSS +
				'voption"><div><div class="nep-icon-tv ' +
				NCSS +
				'-iconmenu "></div> <div class="' +
				NCSS +
				'-lablemenu">' +
				VideoMenuLable1S +
				'</div><div id="' +
				NCSS +
				'lableShader"></div><div class="nep-icon-arrow-right2 ' +
				NCSS +
				'-iconnext"></div></div></div>';
			shaders_menu =
				'<div id="' +
				NCSS +
				'smenu" class="' +
				NCSS +
				'vmenu"><div class="' +
				NCSS +
				"voption " +
				NCSS +
				'back"><div class="nep-icon-arrow-left2 ' +
				NCSS +
				'-iconmenu "></div> <div class="' +
				NCSS +
				'-lablemenu">' +
				VideoMenuLable1S +
				'</div></div><div class="' +
				NCSS +
				'voption"><input type="radio" name="shaders" class="' +
				NCSS +
				'checkbox" id="NJSshaders1" /><label for="NJSshaders1">' +
				shadersOP1 +
				'</label></div><div class="' +
				NCSS +
				'voption"><input type="radio" name="shaders" class="' +
				NCSS +
				'checkbox" id="NJSshaders2" /><label for="NJSshaders2">' +
				shadersOP2 +
				'</label></div><div class="' +
				NCSS +
				'voption"><input type="radio" name="shaders" class="' +
				NCSS +
				'checkbox" id="NJSshaders3" /><label for="NJSshaders3">' +
				shadersOP3 +
				'</label></div><div class="' +
				NCSS +
				'voption"><input type="radio" name="shaders" class="' +
				NCSS +
				'checkbox" id="NJSshaders4" /><label for="NJSshaders4">' +
				shadersOP4 +
				'</label></div><div class="' +
				NCSS +
				'voption"><input type="radio" name="shaders" class="' +
				NCSS +
				'checkbox" id="NJSshaders5" /><label for="NJSshaders5">' +
				shadersOP5 +
				'</label></div><div class="' +
				NCSS +
				'voption"><input type="radio" name="shaders" class="' +
				NCSS +
				'checkbox" id="NJSshaders6" /><label for="NJSshaders6">' +
				shadersOP6 +
				'</label></div><div class="' +
				NCSS +
				'voption"><input type="radio" name="shaders" class="' +
				NCSS +
				'checkbox" id="NJSshaders7" /><label for="NJSshaders7">' +
				shadersOP7 +
				"</label></div></div>";
		}
		videoSettings =
			'<div id="' +
			NCSS +
			'videoSettings" tabindex="-1" class="' +
			NCSS +
			'vmenu"><div id="' +
			NCSS +
			'menuNjs"><div id="' +
			NCSS +
			'nepsettings" class="' +
			NCSS +
			'voption"><div class="nep-icon-menu ' +
			NCSS +
			'-iconmenu "></div> <div class="' +
			NCSS +
			'-lablemenu">' +
			VideoMenuLable1 +
			'</div><div class="nep-icon-arrow-right2 ' +
			NCSS +
			'-iconnext"></div></div>' +
			shaders_button +
			'<div id="' +
			NCSS +
			'ar" class="' +
			NCSS +
			'voption"><div><div class="nep-icon-display ' +
			NCSS +
			'-iconmenu "></div> <div class="' +
			NCSS +
			'-lablemenu">' +
			VideoMenuLable1AR +
			'</div><div id="' +
			NCSS +
			'lableAr"></div><div class="nep-icon-arrow-right2 ' +
			NCSS +
			'-iconnext"></div></div></div><div id="' +
			NCSS +
			'colorM" class="' +
			NCSS +
			'voption"><div ><div class="nep-icon-equalizer ' +
			NCSS +
			'-iconmenu "></div> <div class="' +
			NCSS +
			'-lablemenu">' +
			imgSettings +
			'</div><div class="nep-icon-arrow-right2 ' +
			NCSS +
			'-iconnext"></div></div></div><div class="' +
			NCSS +
			'voption"><input type="checkbox" class="' +
			NCSS +
			'checkbox" id="checkbox_smooth" /><label for="checkbox_smooth">' +
			smoothingLang +
			'</label></div><div class="' +
			NCSS +
			'voption"><input type="checkbox" class="' +
			NCSS +
			'checkbox" id="checkbox_showFPS" /><label for="checkbox_showFPS">' +
			showFPSLang +
			"</label></div>" +
			emulOptions +
			'</div><div id="' +
			NCSS +
			'armenu" class="' +
			NCSS +
			'vmenu"><div class="' +
			NCSS +
			"voption " +
			NCSS +
			'back"><div class="nep-icon-arrow-left2 ' +
			NCSS +
			'-iconmenu "></div> <div class="' +
			NCSS +
			'-lablemenu">' +
			VideoMenuLable1AR +
			'</div></div><div class="' +
			NCSS +
			'voption"><input type="radio" name="ar" class="' +
			NCSS +
			'checkbox" id="NJSar1" /><label for="NJSar1">' +
			arOP1 +
			'</label></div><div class="' +
			NCSS +
			'voption"><input type="radio" name="ar" class="' +
			NCSS +
			'checkbox" id="NJSar2" /><label for="NJSar2">' +
			arOP2 +
			'</label></div><div class="' +
			NCSS +
			'voption"><input type="radio" name="ar" class="' +
			NCSS +
			'checkbox" id="NJSar3" /><label for="NJSar3">' +
			arOP3 +
			"</label></div></div>" +
			shaders_menu +
			'<div id="' +
			NCSS +
			'colormenu" class="' +
			NCSS +
			'vmenu"><div class="' +
			NCSS +
			"voption " +
			NCSS +
			'back"><div class="nep-icon-arrow-left2 ' +
			NCSS +
			'-iconmenu "></div> <div class="' +
			NCSS +
			'-lablemenu">' +
			imgSettings +
			'</div></div><div  class="' +
			NCSS +
			'-lablemenuOP">Saturate</div><input type="range" min="1" max="200" value="100" tabindex="-1" class="' +
			NCSS +
			'slider" id="' +
			NCSS +
			'saturate"><div class="' +
			NCSS +
			'-lablemenuOP">Contrast</div><input type="range" min="1" max="200" value="100" tabindex="-1" class="' +
			NCSS +
			'slider" id="' +
			NCSS +
			'contrast"><div  class="' +
			NCSS +
			'-lablemenuOP">Brightness</div><input type="range" min="1" max="200" value="100" tabindex="-1" class="' +
			NCSS +
			'slider" id="' +
			NCSS +
			'brightness"><div id="' +
			NCSS +
			'resetColor" class="' +
			NCSS +
			'-lablemenuBT">' +
			resetLan +
			'</div></div><div id="' +
			NCSS +
			'emulmenu" class="' +
			NCSS +
			'vmenu"><div class="' +
			NCSS +
			"voption " +
			NCSS +
			'back"><div class="nep-icon-arrow-left2 ' +
			NCSS +
			'-iconmenu "></div> <div class="' +
			NCSS +
			'-lablemenu">Colore Menu</div></div></div></div>';
		sscbs =
			"#" +
			NCSS +
			NCSS +
			NCSS +
			NCSS +
			NCSS +
			NCSS +
			"3{display:none;position: absolute; z-index:5; width: 100% !important; height: 100% !important}#" +
			NCSS +
			NCSS +
			NCSS +
			NCSS +
			NCSS +
			NCSS +
			"3_html5_api{visibility: visible !important; position: absolute; top: 0; left: 0; width: 100% !important; height: 100% !important}#" +
			NCSS +
			NCSS +
			NCSS +
			NCSS +
			NCSS +
			NCSS +
			"2{display:none;position: absolute; z-index:5;width: 100% !important; height: 100% !important}#" +
			NCSS +
			NCSS +
			NCSS +
			NCSS +
			NCSS +
			NCSS +
			"2_html5_api{visibility: visible !important; position: absolute; top: 0; left: 0; width: 100% !important; height: 100% !important}#" +
			NCSS +
			"saveupload,." +
			NCSS +
			"NJSsm,." +
			NCSS +
			"imgholder,." +
			NCSS +
			"saveupload,." +
			NCSS +
			"urldata{display:none}." +
			NCSS +
			"NJSsm{width:100%;max-height:100%;position:relative;background:rgba(31,31,31,.58);z-index:5}." +
			NCSS +
			"Blur{filter:blur(15px)!important;-webkit-filter:blur(15px)!important}." +
			NCSS +
			"saveml{width:100%;float:left;height:34px;border-bottom:solid 1px #fff;text-align:center;color:#fff;font-size:31px!important;line-height:1;padding-top:8px;padding-bottom:2px}." +
			NCSS +
			"savemr{width:100%;max-height:100%;max-width:720px;margin:0 auto;height:100%;position:relative;overflow-y:auto}." +
			NCSS +
			"empty{border:3px dashed #5a5a5a;position:absolute;top:0;right:0;bottom:0;left:0}." +
			NCSS +
			"ctime{text-align:center;font-size:14px;margin:5px}." +
			NCSS +
			"imgslot{overflow:hidden;max-height:167.63px}." +
			NCSS +
			"savestate img{max-height:224.63px}." +
			NCSS +
			"NJSsmButtons{height:42px;position:relative;width:100%;left:0;right:0;bottom:4px}." +
			NCSS +
			"savestate,." +
			NCSS +
			"snone{width:31.2%;margin:5px;max-height:245px;position:relative;background:#2f2f2f;overflow:hidden;float:left}." +
			NCSS +
			"savestate{font-size:14px!important;line-height:18px}." +
			NCSS +
			"snone{min-height:193.66px;height:100%}.pixelshade{position:absolute;left:0;top:0;height:100%;width:100%;opacity:.2;image-rendering:pixelated;background-size:4px;filter:blur(1px)}#" +
			NCSS +
			"ClousCSSM{width:116px}." +
			NCSS +
			"saveslot{text-align:center;color:#fff;margin:0!important}." +
			NCSS +
			"progress-bar{float:left;width:0;height:100%;font-size:12px;line-height:20px;text-align:center;background-color:" +
			NepColor +
			";-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);-webkit-transition:width .6s ease;-o-transition:width .6s ease;transition:width .6s ease}." +
			NCSS +
			"progress{height:25px;margin-top:67px;overflow:hidden;background-color:#f5f5f5;border-radius:4px;-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,.1);box-shadow:inset 0 1px 2px rgba(0,0,0,.1)}." +
			NCSS +
			"savestate img:hover{cursor:pointer}." +
			NCSS +
			"Hoversaveslot{position:absolute;background:0 0;text-align:center;font-size:22px;font-weight:400;color:#fff;top:0;right:0;bottom:0;left:0}." +
			NCSS +
			"dsavesate{text-align:center;width:100%;background:#212121;padding:5px;line-height:21px}." +
			NCSS +
			"dsavesate:hover{background:" +
			NepColor +
			";cursor:pointer}.slotd{width:100%}." +
			NCSS +
			"slotd .nep-icon-download3{float:left;color:#fff;font-size:22px;padding:4px}." +
			NCSS +
			"lastsave{display:none;text-align:center;color:#fff;margin:0!important}." +
			NCSS +
			"last ." +
			NCSS +
			"lastsave{display:block}." +
			NCSS +
			"last ." +
			NCSS +
			"saveslot{display:none}";
		cbs1 =
			'<div class="' +
			NCSS +
			'tabs-panel" id="' +
			NCSS +
			'controller-1"> <div class="' +
			NCSS +
			'nLable"> Control presets</div><div class="' +
			NCSS +
			'clear"></div><div class="' +
			NCSS +
			"medium-5 " +
			NCSS +
			"columns " +
			NCSS +
			'Cbut"> <div class="' +
			NCSS +
			"actions " +
			NCSS +
			'nepCbuttons  "><a id="' +
			NCSS +
			'OP1" class="' +
			NCSS +
			"ConReset " +
			NCSS +
			"button " +
			NCSS +
			'secondary">Standart</a><a id="' +
			NCSS +
			'OP2" class="' +
			NCSS +
			"button " +
			NCSS +
			'secondary ">Num lock</a><a id="' +
			NCSS +
			'OP4" class="' +
			NCSS +
			"button " +
			NCSS +
			'secondary ">Num lock + WSAD</a><a id="' +
			NCSS +
			'OP3" class="' +
			NCSS +
			"button " +
			NCSS +
			'secondary ">WSAD</a></div></div><div class="' +
			NCSS +
			'clear"></div><div class="' +
			NCSS +
			"medium-5 " +
			NCSS +
			'columns"> <div class="' +
			NCSS +
			"actions " +
			NCSS +
			'nepCbuttons"><a class="' +
			NCSS +
			"button " +
			NCSS +
			"secondary " +
			NCSS +
			'advance_settings">' +
			AdveSetLang +
			'</a></div></div><div class="' +
			NCSS +
			'clear"></div><div class="' +
			NCSS +
			"medium-5 " +
			NCSS +
			"columns " +
			NCSS +
			'advance_tabs"> <div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>SELECT:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSSELECT" data-id="2" data-gamepad-key="SELECT_BACK" data-value="16" data-type="2" data-index="0" data-axes-key="" data-gamepad-index="0" data-input-key="16" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>START:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSSTART" data-id="3" data-gamepad-key="START_FORWARD" data-value="13" data-type="2" data-index="0" data-axes-key="" data-gamepad-index="0" data-input-key="17" readonly="" placeholder=""> </div></div><div class="' +
			NCSS +
			"medium-5 " +
			NCSS +
			"columns " +
			NCSS +
			'advance_tabs"> <div class="' +
			NCSS +
			'clear"></div><div class="' +
			NCSS +
			'nLable"> Dpad</div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>UP:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSUP" data-id="4" data-gamepad-key="DPAD_UP" data-value="38" data-type="2" data-index="0" data-axes-key="" data-gamepad-index="0" data-input-key="81" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>DOWN:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSDOWN" data-id="5" data-gamepad-key="DPAD_DOWN" data-value="40" data-type="2" data-index="0" data-axes-key="" data-gamepad-index="0" data-input-key="65" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>LEFT:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSLEFT" data-id="6" data-gamepad-key="DPAD_LEFT" data-value="37" data-type="2" data-index="0" data-axes-key="" data-gamepad-index="0" data-input-key="90" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>RIGHT:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSRIGHT" data-id="7" data-gamepad-key="DPAD_RIGHT" data-value="39" data-type="2" data-index="0" data-axes-key="" data-gamepad-index="0" data-input-key="87" readonly="" placeholder=""> </div></div><div class="' +
			NCSS +
			"medium-5 " +
			NCSS +
			"columns " +
			NCSS +
			'advance_tabs"> <div class="' +
			NCSS +
			'clear"></div><div class="' +
			NCSS +
			'nLable"> Buttons</div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>A:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYA" data-id="8" data-gamepad-key="FACE_1" data-value="88" data-type="2" data-index="0" data-axes-key="" data-gamepad-index="0" data-input-key="9" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>B:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYB" data-id="0" data-gamepad-key="FACE_2" data-value="67" data-type="2" data-index="0" data-axes-key="" data-gamepad-index="0" data-input-key="83" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>X:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYX" data-id="9" data-gamepad-key="FACE_3" data-value="90" data-type="2" data-index="0" data-axes-key="" data-gamepad-index="0" data-input-key="20" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>Y:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYY" data-id="1" data-gamepad-key="FACE_4" data-value="83" data-type="2" data-index="0" data-axes-key="" data-gamepad-index="0" data-input-key="88" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>L:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYL" data-id="10" data-gamepad-key="LEFT_TOP_SHOULDER" data-value="65" data-type="2" data-index="0" data-axes-key="" data-gamepad-index="0" data-input-key="18" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>R:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYR" data-id="11" data-gamepad-key="RIGHT_TOP_SHOULDER" data-value="68" data-type="2" data-index="0" data-axes-key="" data-gamepad-index="0" data-input-key="69" readonly="" placeholder=""> </div></div><div class="' +
			NCSS +
			'clear"></div><div class="' +
			NCSS +
			"medium-5 " +
			NCSS +
			"columns " +
			NCSS +
			'advance_tabs"> <div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>L2:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYL2" data-id="12" data-gamepad-key="LEFT_BOTTOM_SHOULDER" data-value="81" data-type="2" data-index="0" data-axes-key="" data-gamepad-index="0" data-input-key="68" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>R2:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYR2" data-id="13" data-gamepad-key="RIGHT_BOTTOM_SHOULDER" data-value="87" data-type="2" data-index="0" data-axes-key="" data-gamepad-index="0" data-input-key="67" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>L3:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYL3" data-id="32" data-gamepad-key="LEFT_STICK" data-value="82" data-type="2" data-index="0" data-axes-key="" data-gamepad-index="0" data-input-key="82" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>R3:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYR3" data-id="31" data-gamepad-key="RIGHT_STICK" data-value="70" data-type="2" data-index="0" data-axes-key="" data-gamepad-index="0" data-input-key="70" readonly="" placeholder=""> </div></div><div class="' +
			NCSS +
			'clear"></div><div class="' +
			NCSS +
			"medium-5 " +
			NCSS +
			"columns " +
			NCSS +
			'advance_tabs"> <div class="' +
			NCSS +
			'nLable"> Left Analog</div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>UP:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYL_A_UP" data-id="14" data-gamepad-key="20" data-value="69" data-type="2" data-index="0" data-axes-key="" data-gamepad-index="0" data-input-key="71" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>DOWN:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYL_A_DOWN" data-id="15" data-gamepad-key="19" data-value="69" data-type="2" data-index="0" data-axes-key="" data-gamepad-index="0" data-input-key="66" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>LEFT:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYL_A_LEFT" data-id="16" data-gamepad-key="18" data-value="69" data-type="2" data-index="0" data-axes-key="" data-gamepad-index="0" data-input-key="84" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>RIGHT:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYL_A_RIGHT" data-id="17" data-gamepad-key="17" data-value="69" data-type="2" data-index="0" data-axes-key="" data-gamepad-index="0" data-input-key="86" readonly="" placeholder=""> </div></div><div class="' +
			NCSS +
			'clear"></div><div class="' +
			NCSS +
			"medium-5 " +
			NCSS +
			"columns " +
			NCSS +
			'advance_tabs"> <div class="' +
			NCSS +
			'nLable"> Right Analog</div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>UP:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYR_A_UP" data-id="18" data-gamepad-key="24" data-value="69" data-type="2" data-index="0" data-axes-key="" data-gamepad-index="0" data-input-key="78" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>DOWN:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYR_A_DOWN" data-id="19" data-gamepad-key="23" data-value="69" data-type="2" data-index="0" data-axes-key="" data-gamepad-index="0" data-input-key="85" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>LEFT:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYR_A_LEFT" data-id="20" data-gamepad-key="22" data-value="69" data-type="2" data-index="0" data-axes-key="" data-gamepad-index="0" data-input-key="72" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>RIGHT:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYR_A_RIGHT" data-id="21" data-gamepad-key="21" data-value="69" data-type="2" data-index="0" data-axes-key="" data-gamepad-index="0" data-input-key="89" readonly="" placeholder=""> </div></div><div class="' +
			NCSS +
			'clear"></div></div><div class="' +
			NCSS +
			'tabs-panel" id="' +
			NCSS +
			'controller-2" style="display: none;"> <div class="' +
			NCSS +
			"medium-5 " +
			NCSS +
			'columns"> <div class="' +
			NCSS +
			"actions " +
			NCSS +
			'nepCbuttons"><a class="' +
			NCSS +
			"button " +
			NCSS +
			"secondary " +
			NCSS +
			'advance_settings">' +
			AdveSetLang +
			'</a></div></div><div class="' +
			NCSS +
			'clear"></div><div class="' +
			NCSS +
			"medium-5 " +
			NCSS +
			"columns " +
			NCSS +
			'advance_tabsP2"> <div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>SELECT:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSSELECTP2" data-id="2" data-gamepad-key="SELECT_BACK" data-value="" data-type="2" data-index="1" data-gamepad-index="1" data-input-key="73" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>START:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSSTARTP2" data-id="3" data-gamepad-key="START_FORWARD" data-value="" data-type="2" data-index="1" data-gamepad-index="1" data-input-key="75" readonly="" placeholder=""> </div></div><div class="' +
			NCSS +
			"medium-5 " +
			NCSS +
			"columns " +
			NCSS +
			'advance_tabsP2"> <div class="' +
			NCSS +
			'clear"></div><div class="' +
			NCSS +
			'nLable"> Dpad</div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>UP:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSUPP2" data-id="4" data-gamepad-key="20" data-value="" data-type="2" data-index="1" data-gamepad-index="1" data-input-key="188" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>DOWN:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSDOWNP2" data-id="5" data-gamepad-key="19" data-value="" data-type="2" data-index="1" data-gamepad-index="1" data-input-key="79" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>LEFT:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSLEFTP2" data-id="6" data-gamepad-key="18" data-value="" data-type="2" data-index="1" data-gamepad-index="1" data-input-key="76" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>RIGHT:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSRIGHTP2" data-id="7" data-gamepad-key="17" data-value="" data-type="2" data-index="1" data-gamepad-index="1" data-input-key="190" readonly="" placeholder=""> </div></div><div class="' +
			NCSS +
			"medium-5 " +
			NCSS +
			"columns " +
			NCSS +
			'advance_tabsP2"> <div class="' +
			NCSS +
			'clear"></div><div class="' +
			NCSS +
			'nLable"> Buttons</div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>A:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns">';
		cbs2 =
			'<input type="text" id="NJSKEYAP2" data-id="8" data-gamepad-key="FACE_1" data-value="" data-type="2" data-index="1" data-gamepad-index="1" data-input-key="74" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>B:</label></div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYBP2" data-id="0" data-gamepad-key="FACE_2" data-value="" data-type="2" data-index="1" data-gamepad-index="1" data-input-key="80" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>X:</label></div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYXP2" data-id="9" data-gamepad-key="FACE_3" data-value="" data-type="2" data-index="1" data-gamepad-index="1" data-input-key="77" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>Y:</label></div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYYP2" data-id="1" data-gamepad-key="FACE_4" data-value="" data-type="2" data-index="1" data-gamepad-index="1" data-input-key="33" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>L:</label></div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYLP2" data-id="10" data-gamepad-key="LEFT_TOP_SHOULDER" data-value="" data-type="2" data-index="1" data-gamepad-index="1" data-input-key="191" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>R:</label></div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYRP2" data-id="11" data-gamepad-key="RIGHT_TOP_SHOULDER" data-value="" data-type="2" data-index="1" data-gamepad-index="1" data-input-key="219" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>L2:</label></div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYL2P2" data-id="12" data-gamepad-key="400" data-value="" data-type="2" data-index="1" data-gamepad-index="1" data-input-key="222" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>R2:</label></div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYR2P2" data-id="13" data-gamepad-key="400" data-value="" data-type="2" data-index="1" data-gamepad-index="1" data-input-key="221" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>L3:</label></div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYL3P2" data-id="32" data-gamepad-key="LEFT_STICK" data-value="" data-type="2" data-index="1" data-axes-key="" data-gamepad-index="1" data-input-key="192" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>R3:</label></div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYR3P2" data-id="33" data-gamepad-key="RIGHT_STICK" data-value="" data-type="2" data-index="1" data-axes-key="" data-gamepad-index="1" data-input-key="32" readonly="" placeholder=""> </div></div><div class="' +
			NCSS +
			"medium-5 " +
			NCSS +
			"columns " +
			NCSS +
			'advance_tabsP2"> <div class="' +
			NCSS +
			'clear"></div><div class="' +
			NCSS +
			'nLable"> Left Analog</div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>UP:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYL_A_UPP2" data-id="14" data-gamepad-key="20" data-value="" data-type="1" data-index="1" data-gamepad-index="1" data-input-key="19" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>DOWN:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYL_A_DOWNP2" data-id="15" data-gamepad-key="19" data-value="" data-type="1" data-index="1" data-gamepad-index="1" data-input-key="8" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>LEFT:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYL_A_LEFTP2" data-id="16" data-gamepad-key="18" data-value="" data-type="1" data-index="1" data-gamepad-index="1" data-input-key="45" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>RIGHT:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYL_A_RIGHTP2" data-id="17" data-gamepad-key="17" data-value="" data-type="1" data-index="1" data-gamepad-index="1" data-input-key="220" readonly="" placeholder=""> </div></div><div class="' +
			NCSS +
			"medium-5 " +
			NCSS +
			"columns " +
			NCSS +
			'advance_tabsP2"> <div class="' +
			NCSS +
			'clear"></div><div class="' +
			NCSS +
			'nLable"> Right Analog</div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>UP:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYR_A_UPP2" data-id="18" data-gamepad-key="24" data-value="" data-type="1" data-index="1" data-gamepad-index="1" data-input-key="97" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>DOWN:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYR_A_DOWNP2" data-id="19" data-gamepad-key="23" data-value="" data-type="1" data-index="1" data-gamepad-index="1" data-input-key="98" readonly="98" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>LEFT:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYR_A_LEFTP2" data-id="20" data-gamepad-key="22" data-value="" data-type="1" data-index="1" data-axes-key="" data-gamepad-index="0" data-input-key="13" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>RIGHT:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYR_A_RIGHTP2" data-id="21" data-gamepad-key="21" data-value="" data-type="1" data-index="1" data-axes-key="" data-gamepad-index="0" data-input-key="34" readonly="" placeholder=""> </div></div><div class="' +
			NCSS +
			'clear"></div></div><div class="' +
			NCSS +
			'tabs-panel" id="' +
			NCSS +
			'controller-3" style="display: none;"> <div class="' +
			NCSS +
			"medium-5 " +
			NCSS +
			'columns "> <div class="' +
			NCSS +
			"actions " +
			NCSS +
			'nepCbuttons"><a class="' +
			NCSS +
			"button " +
			NCSS +
			"secondary " +
			NCSS +
			'advance_settings">' +
			AdveSetLang +
			'</a></div></div><div class="' +
			NCSS +
			'clear"></div><div class="' +
			NCSS +
			"medium-5 " +
			NCSS +
			"columns " +
			NCSS +
			'advance_tabsP3"> <div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>SELECT:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSSELECTP3" data-id="2" data-gamepad-key="400" data-value="" data-type="1" data-index="2" data-gamepad-index="2" data-input-key="101" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>START:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSSTARTP3" data-id="3" data-gamepad-key="400" data-value="" data-type="1" data-index="2" data-gamepad-index="2" data-input-key="102" readonly="" placeholder=""> </div></div><div class="' +
			NCSS +
			"medium-5 " +
			NCSS +
			"columns " +
			NCSS +
			'advance_tabsP3"> <div class="' +
			NCSS +
			'clear"></div><div class="' +
			NCSS +
			'nLable"> Dpad</div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>UP:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSUPP3" data-id="4" data-gamepad-key="400" data-value="" data-type="1" data-index="2" data-gamepad-index="2" data-input-key="103" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>DOWN:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSDOWNP3" data-id="5" data-gamepad-key="400" data-value="" data-type="1" data-index="2" data-gamepad-index="2" data-input-key="104" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>LEFT:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSLEFTP3" data-id="6" data-gamepad-key="400" data-value="" data-type="1" data-index="2" data-gamepad-index="2" data-input-key="105" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>RIGHT:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSRIGHTP3" data-id="7" data-gamepad-key="400" data-value="" data-type="1" data-index="2" data-gamepad-index="2" data-input-key="96" readonly="" placeholder=""> </div></div><div class="' +
			NCSS +
			"medium-5 " +
			NCSS +
			"columns " +
			NCSS +
			'advance_tabsP3"> <div class="' +
			NCSS +
			'clear"></div><div class="' +
			NCSS +
			'nLable"> Buttons</div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>A:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYAP3" data-id="8" data-gamepad-key="400" data-value="" data-type="1" data-index="2" data-gamepad-index="2" data-input-key="99" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>B:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYBP3" data-id="0" data-gamepad-key="400" data-value="" data-type="1" data-index="2" data-gamepad-index="2" data-input-key="109" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>X:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYXP3" data-id="9" data-gamepad-key="400" data-value="" data-type="1" data-index="2" data-gamepad-index="2" data-input-key="100" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>Y:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYYP3" data-id="1" data-gamepad-key="400" data-value="" data-type="1" data-index="2" data-gamepad-index="2" data-input-key="187" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>L:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYLP3" data-id="10" data-gamepad-key="400" data-value="" data-type="1" data-index="2" data-gamepad-index="2" data-input-key="112" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>R:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYRP3" data-id="11" data-gamepad-key="400" data-value="" data-type="1" data-index="2" data-gamepad-index="2" data-input-key="113" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>L2:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYL2P3" data-id="12" data-gamepad-key="400" data-value="" data-type="1" data-index="2" data-gamepad-index="2" data-input-key="114" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>R2:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYR2P3" data-id="13" data-gamepad-key="400" data-value="" data-type="1" data-index="2" data-gamepad-index="2" data-input-key="115" readonly="" placeholder=""> </div></div><div class="' +
			NCSS +
			"medium-5 " +
			NCSS +
			"columns " +
			NCSS +
			'advance_tabsP3"> <div class="' +
			NCSS +
			'clear"></div><div class="' +
			NCSS +
			'nLable"> Left Analog</div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>UP:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYL_A_UPP3" data-id="14" data-gamepad-key="20" data-value="" data-type="1" data-index="2" data-axes-key="" data-gamepad-index="2" data-input-key="118" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>DOWN:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYL_A_DOWNP3" data-id="15" data-gamepad-key="19" data-value="" data-type="1" data-index="2" data-axes-key="" data-gamepad-index="2" data-input-key="119" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>LEFT:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYL_A_LEFTP3" data-id="16" data-gamepad-key="18" data-value="" data-type="1" data-index="2" data-axes-key="" data-gamepad-index="2" data-input-key="117" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>RIGHT:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYL_A_RIGHTP3" data-id="17" data-gamepad-key="17" data-value="" data-type="1" data-index="2" data-axes-key="" data-gamepad-index="2" data-input-key="116" readonly="" placeholder=""> </div></div><div class="' +
			NCSS +
			"medium-5 " +
			NCSS +
			"columns " +
			NCSS +
			'advance_tabsP3"> <div class="' +
			NCSS +
			'clear"></div><div class="' +
			NCSS +
			'nLable"> Right Analog</div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>UP:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYR_A_UPP3" data-id="18" data-gamepad-key="24" data-value="" data-type="1" data-index="2" data-axes-key="" data-gamepad-index="2" data-input-key="122" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>DOWN:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYR_A_DOWNP3" data-id="19" data-gamepad-key="23" data-value="" data-type="1" data-index="2" data-axes-key="" data-gamepad-index="2" data-input-key="123" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>LEFT:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYR_A_LEFTP3" data-id="20" data-gamepad-key="22" data-value="" data-type="1" data-index="2" data-axes-key="" data-gamepad-index="2" data-input-key="121" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>RIGHT:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYR_A_RIGHTP3" data-id="21" data-gamepad-key="21" data-value="" data-type="1" data-index="2" data-axes-key="" data-gamepad-index="2" data-input-key="120" readonly="" placeholder=""> </div></div><div class="' +
			NCSS +
			'clear"></div></div><div class="' +
			NCSS +
			'tabs-panel" id="' +
			NCSS +
			'controller-4" style="display: none;"> <div class="' +
			NCSS +
			"medium-5 " +
			NCSS +
			'columns"> <div class="' +
			NCSS +
			"actions " +
			NCSS +
			'nepCbuttons"><a class="' +
			NCSS +
			"button " +
			NCSS +
			"secondary " +
			NCSS +
			'advance_settings">' +
			AdveSetLang +
			'</a></div></div><div class="' +
			NCSS +
			'clear"></div><div class="' +
			NCSS +
			"medium-5 " +
			NCSS +
			"columns " +
			NCSS +
			'advance_tabsP4"> <div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>SELECT:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSSELECTP4" data-id="2" data-gamepad-key="400" data-value="" data-type="1" data-index="3" data-gamepad-index="3" data-input-key="50" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>START:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSSTARTP4" data-id="3" data-gamepad-key="400" data-value="" data-type="1" data-index="3" data-gamepad-index="3" data-input-key="51" readonly="" placeholder=""> </div></div><div class="' +
			NCSS +
			"medium-5 " +
			NCSS +
			"columns " +
			NCSS +
			'advance_tabsP4"> <div class="' +
			NCSS +
			'clear"></div><div class="' +
			NCSS +
			'nLable"> Dpad</div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>UP:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSUPP4" data-id="4" data-gamepad-key="400" data-value="" data-type="1" data-index="3" data-gamepad-index="3" data-input-key="52" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>DOWN:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSDOWNP4" data-id="5" data-gamepad-key="400" data-value="" data-type="1" data-index="3" data-gamepad-index="3" data-input-key="53" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>LEFT:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSLEFTP4" data-id="6" data-gamepad-key="400" data-value="" data-type="1" data-index="3" data-gamepad-index="3" data-input-key="54" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>RIGHT:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSRIGHTP4" data-id="7" data-gamepad-key="400" data-value="" data-type="1" data-index="3" data-gamepad-index="3" data-input-key="55" readonly="" placeholder=""> </div></div><div class="' +
			NCSS +
			"medium-5 " +
			NCSS +
			"columns " +
			NCSS +
			'advance_tabsP4"> <div class="' +
			NCSS +
			'clear"></div><div class="' +
			NCSS +
			'nLable"> Buttons</div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>A:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYAP4" data-id="8" data-gamepad-key="400" data-value="" data-type="1" data-index="3" data-gamepad-index="3" data-input-key="48" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>B:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYBP4" data-id="0" data-gamepad-key="400" data-value="" data-type="1" data-index="3" data-gamepad-index="3" data-input-key="56" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>X:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYXP4" data-id="9" data-gamepad-key="400" data-value="" data-type="1" data-index="3" data-gamepad-index="3" data-input-key="49" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>Y:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYYP4" data-id="1" data-gamepad-key="400" data-value="" data-type="1" data-index="3" data-gamepad-index="3" data-input-key="57" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>L:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYLP4" data-id="10" data-gamepad-key="400" data-value="" data-type="1" data-index="3" data-gamepad-index="3" data-input-key="36" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>R:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYRP4" data-id="11" data-gamepad-key="400" data-value="" data-type="1" data-index="3" data-gamepad-index="3" data-input-key="111" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>L2:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYL2P4" data-id="12" data-gamepad-key="400" data-value="" data-type="1" data-index="3" data-gamepad-index="3" data-input-key="106" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>R2:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYR2P4" data-id="13" data-gamepad-key="400" data-value="" data-type="1" data-index="3" data-gamepad-index="3" data-input-key="109" readonly="" placeholder=""> </div></div><div class="' +
			NCSS +
			"medium-5 " +
			NCSS +
			"columns " +
			NCSS +
			'advance_tabsP4"> <div class="' +
			NCSS +
			'clear"></div><div class="' +
			NCSS +
			'nLable"> Left Analog</div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>UP:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYL_A_UPP4" data-id="14" data-gamepad-key="20" data-value="" data-type="1" data-index="3" data-axes-key="" data-gamepad-index="3" data-input-key="38" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>DOWN:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYL_A_DOWNP4" data-id="15" data-gamepad-key="19" data-value="" data-type="1" data-index="3" data-axes-key="" data-gamepad-index="3" data-input-key="40" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>LEFT:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYL_A_LEFTP4" data-id="16" data-gamepad-key="18" data-value="" data-type="1" data-index="3" data-axes-key="" data-gamepad-index="3" data-input-key="37" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>RIGHT:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYL_A_RIGHTP4" data-id="17" data-gamepad-key="17" data-value="" data-type="1" data-index="3" data-axes-key="" data-gamepad-index="3" data-input-key="39" readonly="" placeholder=""> </div></div><div class="' +
			NCSS +
			"medium-5 " +
			NCSS +
			"columns " +
			NCSS +
			'advance_tabsP4"> <div class="' +
			NCSS +
			'clear"></div><div class="' +
			NCSS +
			'nLable"> Right Analog</div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>UP:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYR_A_UPP4" data-id="18" data-gamepad-key="24" data-value="" data-type="1" data-index="3" data-axes-key="" data-gamepad-index="3" data-input-key="35" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>DOWN:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYR_A_DOWNP4" data-id="19" data-gamepad-key="23" data-value="" data-type="1" data-index="3" data-axes-key="" data-gamepad-index="3" data-input-key="27" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>LEFT:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYR_A_LEFTP4" data-id="20" data-gamepad-key="22" data-value="" data-type="1" data-index="3" data-axes-key="" data-gamepad-index="3" data-input-key="32" readonly="" placeholder=""> </div><div class="' +
			NCSS +
			"medium-3 " +
			NCSS +
			'columns"> <label>RIGHT:</label> </div><div class="' +
			NCSS +
			"medium-9 " +
			NCSS +
			'columns"> <input type="text" id="NJSKEYR_A_RIGHTP4" data-id="21" data-gamepad-key="21" data-value="" data-type="1" data-index="3" data-axes-key="" data-gamepad-index="3" data-input-key="192" readonly="" placeholder=""> </div></div><div class="' +
			NCSS +
			'clear"></div></div>';
		CBlockhtml = cbs1 + cbs2;
		infohConHtml =
			'<div class="' +
			NCSS +
			"Dlable " +
			NCSS +
			'gamepadStateInfo"><div class="' +
			NCSS +
			"luib " +
			NCSS +
			'info" style="background: none;">Dpad</div><div class="' +
			NCSS +
			"luib " +
			NCSS +
			'info" style="background: none;"> keyboard | gamepad </div><div id="' +
			NCSS +
			'labButtonUP" class="' +
			NCSS +
			"labButtonUP " +
			NCSS +
			'luib" data="28" style="background: none;"><span>UP :</span>UP | UP</div><div id="' +
			NCSS +
			'labButtonDown" class="' +
			NCSS +
			"labButtonDown " +
			NCSS +
			'luib" data="29" style="background: none;"><span>DOWN :</span>DOWN | DOWN</div><div id="' +
			NCSS +
			'labButtonLeft" class="' +
			NCSS +
			"labButtonLeft " +
			NCSS +
			'luib" data="30" style="background: none;"><span>LEFT :</span>LEFT | LEFT</div><div id="' +
			NCSS +
			'labButtonRight" class="' +
			NCSS +
			"labButtonRight " +
			NCSS +
			'luib" data="31" style="background: none;"><span>RIGHT :</span>RIGHT | RIGHT</div></div><div class="' +
			NCSS +
			"Anlable " +
			NCSS +
			'gamepadStateInfo" ><div class="' +
			NCSS +
			'AnlableLeft"><div class="' +
			NCSS +
			"luib " +
			NCSS +
			'info" style="background: none;">Left STICK</div><div class="' +
			NCSS +
			"luib " +
			NCSS +
			'info" style="background: none;"> keyboard | gamepad </div><div id="' +
			NCSS +
			'labanUPL" class="' +
			NCSS +
			"labanUPL " +
			NCSS +
			'luib" data="20" style="background: none;"><span>UP :</span>E | L STICK UP</div><div id="' +
			NCSS +
			'labanDownL" class="' +
			NCSS +
			"labanDownL " +
			NCSS +
			'luib" data="21" style="background: none;"><span>DOWN :</span>E | L STICK DOWN</div><div id="' +
			NCSS +
			'labanLeftL" class="' +
			NCSS +
			"labanLeftL " +
			NCSS +
			'luib" data="22" style="background: none;"><span>LEFT :</span>E | L STICK LEFT</div><div id="' +
			NCSS +
			'labanRightL" class="' +
			NCSS +
			"labanRightL " +
			NCSS +
			'luib" data="23" style="background: none;"><span>RIGHT :</span>E | L STICK RIGHT</div></div><div class="' +
			NCSS +
			'AnlableRight"><div class="' +
			NCSS +
			"luib " +
			NCSS +
			'info" style="background: none;">Right STICK</div><div class="' +
			NCSS +
			"luib " +
			NCSS +
			'info" style="background: none;"> keyboard | gamepad </div><div id="' +
			NCSS +
			'labanUPR" class="' +
			NCSS +
			"labanUPR " +
			NCSS +
			'luib" data="24" style="background: none;"><span>UP:</span>E | R STICK UP</div><div id="' +
			NCSS +
			'labanDownR" class="' +
			NCSS +
			"labanDownR " +
			NCSS +
			'luib" data="25" style="background: none;"><span>DOWN :</span>E | R STICK DOWN</div><div id="' +
			NCSS +
			'labanLeftR" class="' +
			NCSS +
			"labanLeftR " +
			NCSS +
			'luib" data="26" style="background: none;"><span>LEFT :</span>E | R STICK LEFT</div><div id="' +
			NCSS +
			'labanRightR" class="' +
			NCSS +
			"labanRightR " +
			NCSS +
			'luib" data="27" style="background: none;"><span>RIGHT :</span>E | R STICK RIGHT</div></div></div><div class="' +
			NCSS +
			"blable " +
			NCSS +
			'gamepadStateInfo"><div class="' +
			NCSS +
			"luib " +
			NCSS +
			'info" style="background: none;">Buttons</div><div class="' +
			NCSS +
			"luib " +
			NCSS +
			'info" style="background: none;"> keyboard | gamepad </div><div id="' +
			NCSS +
			'labButtonStart" class="' +
			NCSS +
			"labButtonStart " +
			NCSS +
			'luib" data="15" style="background: none;"><span>START :</span>ENTER | START</div><div id="' +
			NCSS +
			'labButtonSelect" class="' +
			NCSS +
			"labButtonSelect " +
			NCSS +
			'luib" data="14" style="background: none;"><span>MODE :</span>SHIFT | SELECT</div><div id="' +
			NCSS +
			'labButton1" class="' +
			NCSS +
			"labButton1 " +
			NCSS +
			'luib" data="1" style="background: none;"><span>A :</span>Z | X</div><div id="' +
			NCSS +
			'labButton2" class="' +
			NCSS +
			"labButton2 " +
			NCSS +
			'luib" data="2" style="background: none;"><span>B :</span>X | A</div><div id="' +
			NCSS +
			'labButton3" class="' +
			NCSS +
			"labButton3 " +
			NCSS +
			'luib" data="3" style="background: none;"><span>C :</span>C | B</div><div id="' +
			NCSS +
			'labButton4" class="' +
			NCSS +
			"labButton4 " +
			NCSS +
			'luib" data="4" style="background: none;"><span>Y :</span>S | Y</div><div id="' +
			NCSS +
			'labButton5" class="' +
			NCSS +
			"labButton5 " +
			NCSS +
			'luib" data="5" style="background: none;"><span>X :</span>A | L1</div><div id="' +
			NCSS +
			'labButton6" class="' +
			NCSS +
			"labButton6 " +
			NCSS +
			'luib" data="6" style="background: none;"><span>Z :</span>D | R1</div><div id="' +
			NCSS +
			'labButton7" class="' +
			NCSS +
			"labButton7 " +
			NCSS +
			'luib" data="7" "><span>L2 :</span></div><div id="' +
			NCSS +
			'labButton8" class="' +
			NCSS +
			"labButton8 " +
			NCSS +
			'luib" data="8" "><span>R2 :</span></div><div id="' +
			NCSS +
			'labButton9" class="' +
			NCSS +
			"labButton9 " +
			NCSS +
			'luib" data="9" "><span>2:</span></div><div id="' +
			NCSS +
			'labButton10" class="' +
			NCSS +
			"labButton10 " +
			NCSS +
			'luib" data="10" "><span>UP :</span></div><div id="' +
			NCSS +
			'labButton11" class="' +
			NCSS +
			"labButton11 " +
			NCSS +
			'luib" data="11" "><span>DOWN :</span></div><div id="' +
			NCSS +
			'labButton12" class="' +
			NCSS +
			"labButton12 " +
			NCSS +
			'luib" data="12" "><span>LEFT :</span></div><div id="' +
			NCSS +
			'labButton13" class="' +
			NCSS +
			"labButton13 " +
			NCSS +
			'luib" data="13" "><span>RIGHT :</span></div><div id="' +
			NCSS +
			'labButtonL1" class="' +
			NCSS +
			"labButtonL1 " +
			NCSS +
			'luib" data="5" "><span>X :</span>A | L1</div><div id="' +
			NCSS +
			'labButtonL2" class="' +
			NCSS +
			"labButtonL2 " +
			NCSS +
			'luib" data="18" "><span>L2 :</span>Q | L2</div><div id="' +
			NCSS +
			'labButtonL3" class="' +
			NCSS +
			"labButtonL3 " +
			NCSS +
			'luib" data="32" "><span>L3 :</span>R | L3</div><div id="' +
			NCSS +
			'labButtonR1" class="' +
			NCSS +
			"labButtonR1 " +
			NCSS +
			'luib" data="6" "><span>Z :</span>D | R1</div><div id="' +
			NCSS +
			'labButtonR2" class="' +
			NCSS +
			"labButtonR2 " +
			NCSS +
			'luib" data="19" "><span>R2 :</span>W | R2</div><div id="' +
			NCSS +
			'labButtonR3" class="' +
			NCSS +
			"labButtonR3 " +
			NCSS +
			'luib" data="33" "><span>R3 :</span>W | R3</div></div>';
		Controlshtml =
			'<div id="' +
			NCSS +
			'NepCui" class="' +
			NCSS +
			'content"><div class="' +
			NCSS +
			'setting-controllers"> <div class="' +
			NCSS +
			"medium-5 " +
			NCSS +
			"columns " +
			NCSS +
			'Cbut"> <div class="' +
			NCSS +
			'tabs" data-tabs="njsc" id="' +
			NCSS +
			'controllers"> <div id="' +
			NCSS +
			'P1" class="' +
			NCSS +
			"tabs-title " +
			NCSS +
			'is-active"><a href="#' +
			NCSS +
			'controller-1" id="' +
			NCSS +
			'controller-1-label">Player 1</a></div><div id="' +
			NCSS +
			'P2" class="' +
			NCSS +
			'tabs-title"><a href="#' +
			NCSS +
			'controller-2" id="' +
			NCSS +
			'controller-2-label">Player 2</a></div><div id="' +
			NCSS +
			'P3" class="' +
			NCSS +
			'tabs-title"><a href="#' +
			NCSS +
			'controller-3" id="' +
			NCSS +
			'controller-3-label">Player 3</a></div><div id="' +
			NCSS +
			'P4" class="' +
			NCSS +
			'tabs-title"><a href="#' +
			NCSS +
			'controller-4" id="' +
			NCSS +
			'controller-4-label">Player 4</a></div></div></div><div class="' +
			NCSS +
			"tabs-content " +
			NCSS +
			'controllers" data-tabs-content="controllers"> <div id="' +
			NCSS +
			'popup1" tabindex="0" class="' +
			NCSS +
			'overlay"> <div class="' +
			NCSS +
			'popup"> <h2>' +
			ControlSetupLang +
			'</h2> <div class="' +
			NCSS +
			'charkey"></div></div></div><div class="' +
			NCSS +
			'clear"></div><div id="' +
			NCSS +
			'popup2" tabindex="0" class="' +
			NCSS +
			'overlay"> <div class="' +
			NCSS +
			'popup"> <h2>' +
			SNJSCLang +
			'</h2> <a class="' +
			NCSS +
			"button " +
			NCSS +
			"primary " +
			NCSS +
			'saveNJSC">' +
			saveALLgame +
			'</a><a class="' +
			NCSS +
			"button " +
			NCSS +
			'saveGameNJSC">' +
			saveOnlygame +
			'</a></div></div><div class="' +
			NCSS +
			'clear"></div><div id="' +
			NCSS +
			'popup3" tabindex="0" class="' +
			NCSS +
			'overlay"> <div class="' +
			NCSS +
			'popup"> <p>' +
			ControlWar +
			'</p> <a class="' +
			NCSS +
			"button " +
			NCSS +
			"primary " +
			NCSS +
			'JsonSave">' +
			Qst1 +
			'</a><a class="' +
			NCSS +
			"button " +
			NCSS +
			'NoJsonSave">' +
			Qst2 +
			'</a></div></div><div class="' +
			NCSS +
			'clear"></div><div class="' +
			NCSS +
			"" +
			imageEmulCont +
			'"><div class="' +
			NCSS +
			"cui_img " +
			NCSS +
			"" +
			imageEmulCont +
			'_c1"> <div id="' +
			NCSS +
			'ConDpad"> <div id="' +
			NCSS +
			'dpadu" class="' +
			NCSS +
			'setmap" data="28"></div><div id="' +
			NCSS +
			'dpadd" class="' +
			NCSS +
			'setmap" data="29"></div><div id="' +
			NCSS +
			'dpadl" class="' +
			NCSS +
			'setmap" data="30"></div><div id="' +
			NCSS +
			'dpadr" class="' +
			NCSS +
			'setmap" data="31"></div></div><div id="' +
			NCSS +
			'ConButtons"> <div id="' +
			NCSS +
			'cui_button1" class="' +
			NCSS +
			'setmap" data="1"></div><div id="' +
			NCSS +
			'cui_button2" class="' +
			NCSS +
			'setmap" data="2"></div><div id="' +
			NCSS +
			'cui_button3" class="' +
			NCSS +
			'setmap" data="3"></div><div id="' +
			NCSS +
			'cui_button4" class="' +
			NCSS +
			'setmap" data="4"></div><div id="' +
			NCSS +
			'cui_button5" class="' +
			NCSS +
			'setmap" data="5"></div><div id="' +
			NCSS +
			'cui_button6" class="' +
			NCSS +
			'setmap" data="6"></div><div id="' +
			NCSS +
			'cui_button7" class="' +
			NCSS +
			'setmap" data="7"></div><div id="' +
			NCSS +
			'cui_button8" class="' +
			NCSS +
			'setmap" data="8"></div><div id="' +
			NCSS +
			'cui_button9" class="' +
			NCSS +
			'setmap" data="9"></div><div id="' +
			NCSS +
			'cui_button10" class="' +
			NCSS +
			'setmap" data="10"></div><div id="' +
			NCSS +
			'cui_button11" class="' +
			NCSS +
			'setmap" data="11"></div><div id="' +
			NCSS +
			'cui_button12" class="' +
			NCSS +
			'setmap" data="12"></div><div id="' +
			NCSS +
			'cui_button13" class="' +
			NCSS +
			'setmap" data="13"></div><div id="' +
			NCSS +
			'cui_button32" class="' +
			NCSS +
			'setmap" data="32"></div><div id="' +
			NCSS +
			'cui_button33" class="' +
			NCSS +
			'setmap" data="33"></div></div><div id="' +
			NCSS +
			'ConSelect" class="' +
			NCSS +
			'setmap" data="14"></div><div id="' +
			NCSS +
			'ConStart" class="' +
			NCSS +
			'setmap" data="15"></div><div id="' +
			NCSS +
			'ConL1" class="' +
			NCSS +
			'setmap" data="5"></div><div id="' +
			NCSS +
			'ConR1" class="' +
			NCSS +
			'setmap" data="6"></div><div id="' +
			NCSS +
			'ConL2" class="' +
			NCSS +
			'setmap" data="18"></div><div id="' +
			NCSS +
			'ConR2" class="' +
			NCSS +
			'setmap" data="19"></div><div id="' +
			NCSS +
			'ConL3" class="' +
			NCSS +
			'setmap" data="32"></div><div id="' +
			NCSS +
			'ConR3" class="' +
			NCSS +
			'setmap" data="33"></div><div id="' +
			NCSS +
			'ConAnalogL"> <div id="' +
			NCSS +
			'AnalogLu" class="' +
			NCSS +
			'setmap" data="20"></div><div id="' +
			NCSS +
			'AnalogLd" class="' +
			NCSS +
			'setmap" data="21"></div><div id="' +
			NCSS +
			'AnalogLl" class="' +
			NCSS +
			'setmap" data="22"></div><div id="' +
			NCSS +
			'AnalogLr" class="' +
			NCSS +
			'setmap" data="23"></div></div><div id="' +
			NCSS +
			'ConAnalogR"> <div id="' +
			NCSS +
			'AnalogRu" class="' +
			NCSS +
			'setmap" data="24"></div><div id="' +
			NCSS +
			'AnalogRd" class="' +
			NCSS +
			'setmap" data="25"></div><div id="' +
			NCSS +
			'AnalogRl" class="' +
			NCSS +
			'setmap" data="26"></div><div id="' +
			NCSS +
			'AnalogRr" class="' +
			NCSS +
			'setmap" data="27"></div></div></div></div><div id="' +
			NCSS +
			'uilable" class="' +
			NCSS +
			"medium-5 " +
			NCSS +
			'columns"><div id="' +
			NCSS +
			'gbadinfo1"><div id="' +
			NCSS +
			'gamepadinfo1" class="' +
			NCSS +
			'gpadC" style="display:block"></div><div id="' +
			NCSS +
			'DGpad1" class="' +
			NCSS +
			"DGpad " +
			NCSS +
			'button" >' +
			NJSOFF +
			'</div></div><div id="' +
			NCSS +
			'gbadinfo2"><div id="' +
			NCSS +
			'gamepadinfo2" class="' +
			NCSS +
			'gpadC "></div><div id="' +
			NCSS +
			'DGpad2" class="' +
			NCSS +
			"DGpad " +
			NCSS +
			'button" >' +
			NJSOFF +
			'</div></div><div id="' +
			NCSS +
			'gbadinfo3"><div id="' +
			NCSS +
			'gamepadinfo3" class="' +
			NCSS +
			'gpadC"></div><div id="' +
			NCSS +
			'DGpad3" class="' +
			NCSS +
			"DGpad " +
			NCSS +
			'button" >' +
			NJSOFF +
			'</div></div><div id="' +
			NCSS +
			'gbadinfo4"><div id="' +
			NCSS +
			'gamepadinfo4" class="' +
			NCSS +
			'gpadC"></div><div id="' +
			NCSS +
			'DGpad4" class="' +
			NCSS +
			"DGpad " +
			NCSS +
			'button" >' +
			NJSOFF +
			"</div></div>" +
			infohConHtml +
			' </div><div class="' +
			NCSS +
			'clear"></div>' +
			CBlockhtml +
			' <div class="' +
			NCSS +
			'clear"></div></div><div class="' +
			NCSS +
			"medium-5 " +
			NCSS +
			"columns " +
			NCSS +
			'Cbut "> <div class="' +
			NCSS +
			"actions " +
			NCSS +
			"nepCbuttons " +
			NCSS +
			'nepUIb"><a class="' +
			NCSS +
			"button " +
			NCSS +
			"primary " +
			NCSS +
			'submit">' +
			saveSlang +
			'</a><a class=" ' +
			NCSS +
			"ConReset " +
			NCSS +
			"button " +
			NCSS +
			'secondary ">' +
			resetLan +
			'</a><a id="' +
			NCSS +
			'ClousCSUi" class="' +
			NCSS +
			"button " +
			NCSS +
			'secondary">' +
			CloseLang +
			"</a></div></div></div></div>";
		swapHtml =
			'<div id="' +
			NCSS +
			'popupSwap" tabindex="0" class="' +
			NCSS +
			'overlay" ><div class="' +
			NCSS +
			'popup" data="1"><h2>' +
			SWAPLang +
			"</h2> <p>" +
			TextSWAPLang +
			"</p><p>" +
			Text2SWAPLang +
			'</p><a class="' +
			NCSS +
			"button " +
			NCSS +
			"primary " +
			NCSS +
			'SwapNJSC">' +
			DiscMenuLang +
			'</a><a class="' +
			NCSS +
			"button " +
			NCSS +
			"primary " +
			NCSS +
			'SwapSaveNJSC">' +
			ButtonSWAPSaveStateLang +
			'</a></div></div><div class="' +
			NCSS +
			'clear"></div><div id="' +
			NCSS +
			'popupSwap2" tabindex="0" class="' +
			NCSS +
			'overlay"><div class="' +
			NCSS +
			'popup" data="1"><h2>' +
			SWAPLang +
			"</h2> <p>" +
			Text4SWAPLang +
			'</p><a class="' +
			NCSS +
			"button " +
			NCSS +
			"primary " +
			NCSS +
			'ReloadSwapNJSC">Reload page</a></div></div><div class="' +
			NCSS +
			'clear"></div><div id="' +
			NCSS +
			'popupSwap3" tabindex="0" class="' +
			NCSS +
			'overlay"><div class="' +
			NCSS +
			'popup" data="1"><h2>' +
			SWAPLang +
			"</h2> <p>" +
			Text5SWAPLang +
			'</p><label class="' +
			NCSS +
			"saveuploadSwap " +
			NCSS +
			"button " +
			NCSS +
			'secondary" for="' +
			NCSS +
			'saveuploadSwap" >Upload your save satet<input id="' +
			NCSS +
			'saveuploadSwap" type="file"></label></div></div><div class="' +
			NCSS +
			'clear"></div>';
		if (cd2GetUrl && NeptunP === "psx") {
			MultiCD = true;
			cd2html =
				'<a class="' +
				NCSS +
				"button " +
				NCSS +
				"primary " +
				NCSS +
				'NJSCD" data-cd="2">' +
				getZipName +
				"CD 2</a>";
		}
		if (cd3GetUrl) {
			cd3html =
				'<a class="' +
				NCSS +
				"button " +
				NCSS +
				"primary " +
				NCSS +
				'NJSCD" data-cd="3">' +
				getZipName +
				"CD 3</a>";
		}
		if (cd4GetUrl) {
			cd4html =
				'<a class="' +
				NCSS +
				"button " +
				NCSS +
				"primary " +
				NCSS +
				'NJSCD" data-cd="4">' +
				getZipName +
				"CD 4</a>";
		}
		if (cd5GetUrl) {
			cd5html =
				'<a class="' +
				NCSS +
				"button " +
				NCSS +
				"primary " +
				NCSS +
				'NJSCD" data-cd="5">' +
				getZipName +
				"CD 5</a>";
		}
		if (cd6GetUrl) {
			cd6html =
				'<a class="' +
				NCSS +
				"button " +
				NCSS +
				"primary " +
				NCSS +
				'NJSCD" data-cd="6">' +
				getZipName +
				"CD 6</a>";
		}
		if (cd7GetUrl) {
			cd7html =
				'<a class="' +
				NCSS +
				"button " +
				NCSS +
				"primary " +
				NCSS +
				'NJSCD" data-cd="7">' +
				getZipName +
				"CD 7</a>";
		}
		if (cd8GetUrl) {
			cd8html =
				'<a class="' +
				NCSS +
				"button " +
				NCSS +
				"primary " +
				NCSS +
				'NJSCD" data-cd="8">' +
				getZipName +
				"CD 8</a>";
		}
		SelectCDHtml =
			'<div id="' +
			NCSS +
			'popupCDmenu" tabindex="0" data-popup="1" class="' +
			NCSS +
			'overlay" ><div class="' +
			NCSS +
			'popup" data="1"><h2>' +
			DiscMenuLang +
			'</h2> <p class="' +
			NCSS +
			'Cdinfo">' +
			Text3SWAPLang +
			'</p><div class="' +
			NCSS +
			'selectCD"><a class="' +
			NCSS +
			"button " +
			NCSS +
			"primary " +
			NCSS +
			'NJSCD" data-cd="1">' +
			getZipName +
			"CD 1</a>" +
			cd2html +
			cd3html +
			cd4html +
			cd5html +
			cd6html +
			cd7html +
			cd8html +
			'</div></div></div><div class="' +
			NCSS +
			'clear"></div>';
		ShadersNep =
			'<div style="float:right" data-click-state="0" title="' +
			ShadersLangBar +
			'" id="' +
			NCSS +
			'VmenuNjs" class="' +
			NCSS +
			'the-icons"><div class=" ' +
			NCSS +
			"demo-icon " +
			NCSS +
			'show-shaders"><div class="nep-icon-cog"></div></div></div>';
		swapD = "";
		if (MultiCD == true) {
			swapD =
				'<div title="' +
				SWAPLang +
				'" class="' +
				NCSS +
				"NEPicon-swap " +
				NCSS +
				'the-icons "><div class="' +
				NCSS +
				"demo-icon " +
				NCSS +
				'icon-swap"><div class="nep-icon-swap"></div></div></div>';
		}
		SSMB =
			'<div title="' +
			langSM +
			'" class="' +
			NCSS +
			"NEPicon-ssmb " +
			NCSS +
			'the-icons "><div class="' +
			NCSS +
			'demo-icon"><div class="nep-icon-folder-open"></div></div></div>';
		Emultoolbar =
			'<div class="' +
			NCSS +
			'emu-ctr-bar"><div title="' +
			controlsSetting +
			'" id="' +
			NCSS +
			'ConUI" class="' +
			NCSS +
			"NEPicon-controls " +
			NCSS +
			'the-icons"><div class="' +
			NCSS +
			"demo-icon " +
			NCSS +
			'icon-arrows-cw"><div class="nep-icon-gamepad"></div></div></div><div title="' +
			langsavegame +
			'" class="' +
			NCSS +
			"NEPicon-save " +
			NCSS +
			'the-icons "><div class="' +
			NCSS +
			"demo-icon " +
			NCSS +
			'icon-download"><div class="nep-icon-floppy-disk"></div></div></div>' +
			SSMB +
			'<div title="' +
			SaveStatePC +
			'" id="' +
			NCSS +
			'NEPicon-down-save" class="' +
			NCSS +
			'the-icons"><div class="' +
			NCSS +
			"demo-icon " +
			NCSS +
			'icon-download"><div class="nep-icon-download3"></div></div></div><div title="' +
			LoadStatePC +
			'" class="' +
			NCSS +
			"NEPicon-load " +
			NCSS +
			"the-icons " +
			NCSS +
			'icon-load"><div class="' +
			NCSS +
			"demo-icon " +
			NCSS +
			'icon-upload"><label class="' +
			NCSS +
			'loadlabel" for="' +
			NCSS +
			'UPload" ><div class=" nep-icon-upload3"><input id="' +
			NCSS +
			'UPload" type="file"></div></label></div></div>' +
			swapD +
			'<div id="' +
			NCSS +
			'NEPicon-mute" title="' +
			muteLangBar +
			'" class="' +
			NCSS +
			'the-icons  "><div class="' +
			NCSS +
			"demo-icon " +
			NCSS +
			'icon-volume-up"><div class="' +
			NCSS +
			'volume nep-icon-volume-high"></div></div></div><div id="' +
			NCSS +
			'bar"><div id="' +
			NCSS +
			'volbg"><div id="' +
			NCSS +
			'slider" style="width: 100%"></div><div id="volumeicon"></div></div></div><div style="float:right" title="' +
			fullscreenLangBar +
			'" class="' +
			NCSS +
			"NEPfullS " +
			NCSS +
			'the-icons"><div class=" ' +
			NCSS +
			"demo-icon " +
			NCSS +
			'icon-resize-full-alt"><div class="nep-icon-enlarge"></div></div></div><div style="float:right" title="' +
			zoomLangBar +
			'" class="' +
			NCSS +
			"NEPemulCropfull " +
			NCSS +
			'the-icons emul-crop-full"><div class="' +
			NCSS +
			'demo-icon zoom  menu-but-full"></div></div>' +
			ShadersNep +
			"</div>";
		HtmlProgress =
			'<div class="' +
			NCSS +
			'progress" id="' +
			NCSS +
			'progress_bar"><div class="' +
			NCSS +
			'progress-bar" role="progressbar"  aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div>';
		HtmlProgressFull =
			'<div class="' +
			NCSS +
			'progress" id="' +
			NCSS +
			'progress_bar"><div class="' +
			NCSS +
			'progress-bar" role="progressbar"  aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div></div>';
		infoDZ =
			'<div id="' +
			NCSS +
			'popupProgress" tabindex="0" class="' +
			NCSS +
			'overlay"><div class="' +
			NCSS +
			'popup" data="1"><h2 id="' +
			NCSS +
			'Dstatus"></h2> <div id="' +
			NCSS +
			'inder"></div></div></div><div class="' +
			NCSS +
			'clear"></div>';
		SSMHtml =
			'<div class="' +
			NCSS +
			'NJSsm"><div class="' +
			NCSS +
			'saveml">' +
			langSM +
			'</div><div class="' +
			NCSS +
			'imgholder"></div><div class="' +
			NCSS +
			'savemr"><div class="' +
			NCSS +
			'snone " data-slot="1"><div class="' +
			NCSS +
			'empty"></div></div><div class="' +
			NCSS +
			'snone" data-slot="2"><div class="' +
			NCSS +
			'empty"></div></div><div class="' +
			NCSS +
			'snone" data-slot="3"><div class="' +
			NCSS +
			'empty"></div></div><div class="' +
			NCSS +
			'snone" data-slot="4"><div class="' +
			NCSS +
			'empty"></div></div><div class="' +
			NCSS +
			'snone" data-slot="5"><div class="' +
			NCSS +
			'empty"></div></div><div class="' +
			NCSS +
			'snone" data-slot="6"><div class="' +
			NCSS +
			'empty"></div></div></div><div class="' +
			NCSS +
			'NJSsmButtons"><div class="' +
			NCSS +
			"medium-5 " +
			NCSS +
			"columns " +
			NCSS +
			'Cbut "> <div class="' +
			NCSS +
			"actions " +
			NCSS +
			"nepCbuttons " +
			NCSS +
			'nepUIb"><label class="' +
			NCSS +
			"saveupload " +
			NCSS +
			"button " +
			NCSS +
			'secondary" style="margin:5px !important;line-height: 1 !important;font-weight: 300;" for="' +
			NCSS +
			'saveupload" >Upload your Save<input id="' +
			NCSS +
			'saveupload" type="file"></label><a id="' +
			NCSS +
			'saveDall" class="' +
			NCSS +
			"button " +
			NCSS +
			'secondary">Download all Save</a><a id="' +
			NCSS +
			'ClousCSSM" class="' +
			NCSS +
			"button " +
			NCSS +
			'secondary">' +
			CloseLang +
			"</a></div></div></div></div>";
		RULT =
			'<li><label class="' +
			NCSS +
			'NepLabel"><input type="radio" name="group8" class="' +
			NCSS +
			'menu" id="RUSLang"> <span class="' +
			NCSS +
			'menu-span" >RUS</span></label></li>';
		JPLT =
			'<li> <label class="' +
			NCSS +
			'NepLabel"> <input type="radio" name="group8" class="' +
			NCSS +
			'menu" id="JPLang"> <span class="' +
			NCSS +
			'menu-span" >JP</span></label></li>';
		if (NselectGameLang === "RusJp") {
			gameLangSelect =
				'<li class="' +
				NCSS +
				'selLang"><label class="' +
				NCSS +
				'NepLabel"><span class="' +
				NCSS +
				"menu " +
				NCSS +
				"emul-sheders " +
				NCSS +
				'select-lang"><span class="' +
				NCSS +
				"menu-span " +
				NCSS +
				'sub-menu" >' +
				LangGameSelect +
				'</span><ul><li><label class="' +
				NCSS +
				'NepLabel"> <input type="radio" name="group8" class="' +
				NCSS +
				'menu" id="ENLang" checked><span class="' +
				NCSS +
				'menu-span">EN</span> </label> </li>' +
				RULT +
				"" +
				JPLT +
				'</ul></span></label><div class="' +
				NCSS +
				'clear"></div></li><div class="' +
				NCSS +
				'clear"></div>';
		} else {
			if (NselectGameLang === "Rus") {
				gameLangSelect =
					'<li class="' +
					NCSS +
					'selLang"><label class="' +
					NCSS +
					'NepLabel"><span class="' +
					NCSS +
					"menu " +
					NCSS +
					"emul-sheders " +
					NCSS +
					'select-lang"><span class="' +
					NCSS +
					"menu-span " +
					NCSS +
					'sub-menu" >' +
					LangGameSelect +
					'</span><ul><li><label class="' +
					NCSS +
					'NepLabel"> <input type="radio" name="group8" class="' +
					NCSS +
					'menu" id="ENLang" checked><span class="' +
					NCSS +
					'menu-span">EN</span> </label> </li>' +
					RULT +
					'</ul></span></label><div class="' +
					NCSS +
					'clear"></div></li><div class="' +
					NCSS +
					'clear"></div>';
			} else {
				if (NselectGameLang === "Jp") {
					gameLangSelect =
						'<li class="' +
						NCSS +
						'selLang"><label class="' +
						NCSS +
						'NepLabel"><span class="' +
						NCSS +
						"menu " +
						NCSS +
						"emul-sheders " +
						NCSS +
						'select-lang"><span class="' +
						NCSS +
						"menu-span " +
						NCSS +
						'sub-menu" >' +
						LangGameSelect +
						'</span><ul><li><label class="' +
						NCSS +
						'NepLabel"> <input type="radio" name="group8" class="' +
						NCSS +
						'menu" id="ENLang" checked><span class="' +
						NCSS +
						'menu-span">EN</span> </label> </li>' +
						JPLT +
						'</ul></span></label><div class="' +
						NCSS +
						'clear"></div></li><div class="' +
						NCSS +
						'clear"></div>';
				} else {
					if (NselectGameLang === false) {
						gameLangSelect = "<div></div>";
					}
				}
			}
		}
		gamepadNote = "gamePadText";
		if (
			NeptunP === "psx" ||
			NeptunP === "sega_saturn" ||
			NeptunP === "atari_jaguar" ||
			NeptunP === "nds" ||
			NeptunP === "3do" ||
			NeptunP === "sega32x"
		) {
		} else {
		}
		if (NeptunP === "sega32x") {
			EmulCanvas =
				'<canvas id="' +
				NCSS +
				'display" tabindex="-1" class="' +
				NCSS +
				'displayX" style=min-width:870px width="1920" height="1080"></canvas>';
		} else {
			EmulCanvas =
				'<div class="pixelshade"></div><canvas id="' +
				NCSS +
				'display" tabindex="-1" width="0" height="0"></canvas>';
		}
		gpadinfo =
			'<div class="' +
			NCSS +
			"nep_game_pad_connect " +
			NCSS +
			"nep_info_game " +
			NCSS +
			'nep_game_pad_connect_T"><div class="' +
			NCSS +
			'nep_deco"></div><div class="' +
			NCSS +
			'info-icon nep-icon-gamepad"></div><p id="gamepads"></p></div>';
		if (MultiCD == true) {
			swapinfo =
				'<div class="' +
				NCSS +
				"nep_swap_disc " +
				NCSS +
				'nep_info_game" data-swap="1"><div class="' +
				NCSS +
				'nep_deco"></div><div class=" ' +
				NCSS +
				'info-icon nep-icon-swap"></div><p>' +
				InfoSWAPMountLang +
				"</p></div>";
		}
		InfoNote =
			"" +
			swapinfo +
			'<div class="' +
			NCSS +
			"nep_save_game " +
			NCSS +
			'nep_info_game"><div class="' +
			NCSS +
			'nep_deco"></div><div class=" ' +
			NCSS +
			'info-icon nep-icon-floppy-disk"></div><p>' +
			saveInfoBar +
			'</p></div><div class="' +
			NCSS +
			"nep_load_game " +
			NCSS +
			'nep_info_game"> <div class="' +
			NCSS +
			'nep_deco"></div> <div class="' +
			NCSS +
			'info-icon nep-icon-upload3"></div><p>' +
			loadInfoBar +
			'</p></div><div class="' +
			NCSS +
			"nep_mute_game " +
			NCSS +
			'nep_info_game"> <div class="' +
			NCSS +
			'nep_deco "></div><div class="' +
			NCSS +
			"info-icon " +
			NCSS +
			'volume nep-icon-volume-high"></div><p>' +
			muteInfoBar +
			'</p></div><div class="' +
			NCSS +
			"nep_reset_game " +
			NCSS +
			'nep_info_game"> <div class="' +
			NCSS +
			'nep_deco"></div><div class="' +
			NCSS +
			'info-icon nep-icon-spinner11"></div><p>' +
			restartInfoBar +
			"</p></div>" +
			gpadinfo +
			'<div class="' +
			NCSS +
			"nep_numL " +
			NCSS +
			'nep_info_game"> <div class="' +
			NCSS +
			'nep_deco"></div><p>' +
			NumLock +
			'</p></div><div class="' +
			NCSS +
			"nep_Qsave_game " +
			NCSS +
			'nep_info_game"> <div class="' +
			NCSS +
			'nep_deco"></div> <div class="' +
			NCSS +
			'info-icon nep-icon-upload3"></div><p>' +
			QsaveInfoBar +
			"</p></div>";
		Ncss0 =
			".vast-skip-button{position: absolute;top: 5px;right: 0;width: auto;background-color: #000000;z-index: 999999999999 !important;cursor: pointer;color: #fff;font-size: 16px;font-style: italic;line-height: 16px;padding: 10px;z-index: 2;}" +
			NepPlayer +
			" ." +
			NCSS +
			"popup , ." +
			NCSS +
			"popup h2 , ." +
			NCSS +
			"NJSsm h2 {font-family: PT Sans, sans-serif ;vertical-align:middle;font-weight: 400; color:#fff}." +
			NCSS +
			"NJSsm div, ." +
			NCSS +
			"NJSsm p , ." +
			NCSS +
			"NJSsm a , ." +
			NCSS +
			"NJSsm span {font-family: PT Sans, sans-serif ;vertical-align:middle;font-weight: 400; color:#fff}" +
			NepPlayer +
			" p{padding-bottom:0px} " +
			NepPlayer +
			" input[type='checkbox']+label:after, " +
			NepPlayer +
			" input[type='checkbox']+label:before {display: block !important;}" +
			NepPlayer +
			" img {vertical-align: middle;border:0;margin:0;padding:0;position:relative;}";
		Ncss1 =
			"#" +
			NCSS +
			NCSS2 +
			NCSS3 +
			"{display: block; cursor: pointer; color: #FFF!important;}#" +
			NCSS +
			NCSS2 +
			NCSS3 +
			":after{content:'" +
			startplayLang +
			"'}#" +
			NCSS +
			"saveuploadSwap{display:none}." +
			NCSS +
			"nep_swap_disc{max-width:600px;}." +
			NCSS +
			"selectCD{max-height: 245px;overflow: hidden;overflow-y: auto;}." +
			NCSS +
			"popup p{font-size: 14px;color:#FFF;text-align:center} ." +
			NCSS +
			"Cdinfo{display:none} #" +
			NCSS +
			"popupSwap ." +
			NCSS +
			"button{width:47%} " +
			NepPlayer +
			" div , " +
			NepPlayer +
			" a {webkit-box-sizing: unset !important;-moz-box-sizing: unset !important;box-sizing: unset !important;}" +
			NepPlayer +
			"{position:relative;height:100%;width:100%;}." +
			NCSS +
			"advance_tabs_active{display:block !important}." +
			NCSS +
			"DGpad{float: left;}.emul-crop-full{display:none}" +
			NepPlayer +
			" div::-webkit-scrollbar {width:10px;}" +
			NepPlayer +
			" div::-webkit-scrollbar-track {background:#dcdcdc;}" +
			NepPlayer +
			"  div::-webkit-scrollbar-thumb {background:" +
			NepColor +
			";}" +
			NepPlayer +
			" div::-webkit-scrollbar-thumb:hover {background: " +
			NepColor +
			";}." +
			NCSS +
			"noad{display:none !important}#" +
			NCSS +
			"popup3 p{line-height: 28px !important;}#" +
			NCSS +
			"popup3 ." +
			NCSS +
			"popup ." +
			NCSS +
			"button {padding: 19px 0px;margin:5px;font-size:14px !important;width:47%;float: left;display:inline;}#" +
			NCSS +
			"ADBanner{background: black;top:50px;width: 100%;z-index: 11;position: absolute;height: 70%;}#" +
			NCSS +
			"adtimerBp{float: right;position: absolute;top: 0;right: 15px;color: white;padding: 5px;cursor: pointer;}." +
			NCSS +
			"column, ." +
			NCSS +
			"columns{width: 500px;padding-left: 16px;padding-right: 16px;}." +
			NCSS +
			"n64{height:260px;}#" +
			NCSS +
			"train{position: relative;}#" +
			NCSS +
			"NepCui{padding: 0; margin: 0; font-family: 'Montserrat',Helvetica,Roboto,Arial,sans-serif !important; font-weight: normal; line-height: 1.5; color: #b9b9b9; background: #fff; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;}." +
			NCSS +
			"Cbut{display:flex}." +
			NCSS +
			"nepCbuttons{background: #1f1f1f;margin-bottom: 5px; display:flex; margin:0 auto;}." +
			NCSS +
			"popup{min-width: 450px;margin: 70px auto; padding: 20px; background: #313131ad; border-radius: 2px; width: 40%; min-height: 220px; position: relative; transition: all 5s ease-in-out;}." +
			NCSS +
			"popup h2{margin-top: 0 !important; color: #e8e8e8; border-bottom: solid 0.5px #ebebeb !important; text-align: center; font-size: 20px !important; padding-bottom: 5px;}." +
			NCSS +
			"popup ." +
			NCSS +
			"charkey{max-height: 30%; overflow: auto; text-align: center; font-size: 24px; margin-top: 65px; color: tomato;}@media screen and (max-width: 700px){." +
			NCSS +
			"box{width: 70%;}." +
			NCSS +
			"popup{width: 70%;}}." +
			NCSS +
			"overlay{position: absolute; top: 0; bottom: 0; left: 0; right: 0; background: rgba(0, 0, 0, 0.7); transition: opacity 250ms; visibility: hidden; opacity: 0; z-index: 1;}." +
			NCSS +
			"tabs-title{font-size: inherit;display: inline-block;text-align: center;}#" +
			NCSS +
			"NepCui input:focus{border: 1px solid " +
			NepColor +
			";background-color: #fff;outline: none;box-shadow: 0 0 5px " +
			NepColor +
			";transition: box-shadow 0.5s,border-color 0.25s ease-in-out;}#" +
			NCSS +
			"NepCui{display: none;background: rgba(31, 31, 31, 0.58);overflow: hidden;z-index: 5;position: relative;}#" +
			NCSS +
			"NepCui [type='text'], [type='password'], [type='date'], [type='datetime'], [type='datetime-local'], [type='month'], [type='week'], [type='email'], [type='number'], [type='search'], [type='tel'], [type='time'], [type='url'], [type='color'], textarea{display: block;box-sizing: border-box;width: 100%;height: 20px;padding: 2px;border: 1px solid #cacaca;margin: 0 0 16px;font-family: inherit;font-size: 12px !important;color: #0a0a0a;background-color: #fff;text-align: center;box-shadow: inset 0 1px 2px rgba(10,10,10,0.1);border-radius: 0;transition: box-shadow 0.5s,border-color 0.25s ease-in-out;-webkit-appearance: none;-moz-appearance: none;}#" +
			NCSS +
			"NepCui input:disabled, input[readonly], textarea:disabled, textarea[readonly]{background-color: #e6e6e6;cursor: default;}#" +
			NCSS +
			"NepCui input{line-height: normal;}#" +
			NCSS +
			"NepCui tabs-title{float: left;}#" +
			NCSS +
			"NepCui canvas{width: 100%; height: 100% !important}." +
			NCSS +
			"button:hover{background:" +
			NepColor +
			"; color: white !important;}." +
			NCSS +
			"tabs{margin: 0 auto;list-style-type: none;position: relative;}." +
			NCSS +
			"tabs-content{transition: all 0.5s ease;border-top: 0;overflow-x: hidden;overflow-y: auto;}." +
			NCSS +
			"tabs-title>a{font-family: 'Montserrat',Helvetica,Roboto,Arial,sans-serif !important;display: block;padding: 12px 17px;line-height: 1;font-size: 12px !important ;color: #e6e6e6;}#" +
			NCSS +
			"NepCui label{font-size: 16px !important;}#" +
			NCSS +
			"NepCui ul, ol, dl{line-height: 1.5;list-style-position: outside;}." +
			NCSS +
			"tabs::before, ." +
			NCSS +
			"tabs::after{content: ' ';display: table;flex-basis: 0;order: 1;}." +
			NCSS +
			"tabs::after{clear: both;}." +
			NCSS +
			"close-button:hover, ." +
			NCSS +
			"close-button:focus{color: #0a0a0a;}." +
			NCSS +
			"close-button{position: absolute;color: #8a8a8a;right: 1rem;top: 0.5rem;font-size: 2em !important;line-height: 1;cursor: pointer;}." +
			NCSS +
			"gba_c1{background: url(imgs/gba.png) no-repeat 50% 50% !important;display: block;height: 300px !important;}." +
			NCSS +
			"sega_c1{background: url(imgs/sega.png) no-repeat 50% 50% !important;display: block;height: 300px !important;}." +
			NCSS +
			"nes_c1{background: url(imgs/nes.png) no-repeat 50% 50% !important;display: block;height: 300px !important;}." +
			NCSS +
			"neogeo_c1{background: url(imgs/neogeo.png) no-repeat 50% 50% !important;display: block;height: 300px !important;}." +
			NCSS +
			"arcade_c1{background: url(imgs/arcade.png) no-repeat 50% 50% !important;display: block;height: 300px !important;}." +
			NCSS +
			"gboy_c1{background: url(imgs/gboy.png) no-repeat 50% 50% !important;display: block;height: 385px !important;}." +
			NCSS +
			"atari_jaguar_c1{background: url(imgs/atari_jaguar.png) no-repeat 50% 50% !important;display: block;height: 385px !important;}." +
			NCSS +
			"ngp_c1{background: url(imgs/ngp.png) no-repeat 50% 50% !important;display: block;height: 385px !important;}." +
			NCSS +
			"gc_c1{background: url(imgs/gc.png) no-repeat 50% 50% !important;display: block;height: 385px !important;}." +
			NCSS +
			"wswan_c1{background: url(imgs/wswan.png) no-repeat 50% 50% !important;display: block;height: 300px !important;}." +
			NCSS +
			"nds_c1{background: url(imgs/nds.png) no-repeat 50% 50% !important;display: block;height: 385px !important;}." +
			NCSS +
			"n64_c1{background: url(imgs/n64.png) no-repeat 50% 50% !important; display: block; height: 385px !important;}." +
			NCSS +
			"dc_c1{background: url(imgs/dc.png) no-repeat 50% 50% !important; display: block; height: 385px !important;}." +
			NCSS +
			"vboy_c1{background: url(imgs/vboy.png) no-repeat 50% 50% !important; display: block; height: 385px !important;}." +
			NCSS +
			"tg16_c1{background: url(imgs/tg16.png) no-repeat 50% 50% !important;display: block;height: 300px !important;}." +
			NCSS +
			"psp_c1{background: url(imgs/psp.png) no-repeat 50% 50% !important;display: block;height: 300px !important;}." +
			NCSS +
			"atari7800_c1{background: url(imgs/atari7800.png) no-repeat 50% 50% !important;display: block;height: 300px !important;}." +
			NCSS +
			"atari2600_c1{background: url(imgs/atari2600.png) no-repeat 50% 50% !important;display: block;height: 385px !important;}." +
			NCSS +
			"d3do_c1{background: url(imgs/d3do.png) no-repeat 50% 50% !important;display: block;height: 300px !important;}." +
			NCSS +
			"snes_c1{background: url(imgs/snes.png) no-repeat 50% 50% !important;display: block;height: 300px !important;}." +
			NCSS +
			"segaMS_c1{background: url(imgs/segaMS.png) no-repeat 50% 50% !important;display: block;height: 300px !important;}." +
			NCSS +
			"segaGG_c1{background: url(imgs/segaGG.png) no-repeat 50% 50% !important;display: block;height: 300px !important;}." +
			NCSS +
			"sega_saturn_c1{background: url(imgs/sega_saturn.png) no-repeat 50% 50% !important;display: block;height: 300px !important;}." +
			NCSS +
			"lynx_c1{background: url(imgs/lynx.png) no-repeat 50% 50% !important;display: block;height: 300px !important;}." +
			NCSS +
			"psx_c1{background: url(imgs/psx.png) no-repeat 50% 50% !important;display: block;height: 300px !important;}." +
			NCSS +
			"gba_c1{height: 300px !important;}." +
			NCSS +
			"setmap:hover{cursor: pointer;background: rgba(0, 6, 14, 0.5) !important;}." +
			NCSS +
			"setmap{background: rgba(0,0,0,0.00) !important;}." +
			NCSS +
			"sega_c1 #" +
			NCSS +
			"dpadl{width: 30px;height: 30px;background-color: aliceblue;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 0px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"sega_c1 #" +
			NCSS +
			"dpadr{width: 30px;height: 30px;background-color: chartreuse;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 69px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"sega_c1 #" +
			NCSS +
			"dpadu{position:absolute !important;width: 30px;height: 30px;background-color: #5a0000;position:absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 35px;right:0px;top: 4px;bottom: 0px;}." +
			NCSS +
			"sega_c1 #" +
			NCSS +
			"dpadd{width: 30px;height: 30px;background-color: aquamarine;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 35px;right:0px;top: 66px;bottom: 0px;}." +
			NCSS +
			"sega_c1 #" +
			NCSS +
			"ConDpad{border:solid 5px rgba(0,0,0,0.00);width: 100px;height: 100px;max-width: 500px;position: relative;left: -132px;top: 92px;margin: 0 auto;}." +
			NCSS +
			"sega_c1 #" +
			NCSS +
			"cui_button1{width: 38px;height: 38px;background-color: #0088ff;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 7px;right:0px;top: 81px;bottom: 0px;}." +
			NCSS +
			"sega_c1 #" +
			NCSS +
			"cui_button2{width: 38px;height: 38px;background-color: #1cff01;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 54px;right:0px;top: 49px;bottom: 0px;}." +
			NCSS +
			"sega_c1 #" +
			NCSS +
			"cui_button3{width: 38px;height: 38px;background-color: #cc00ff;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 108px;right:0px;top: 29px;bottom: 0px;}." +
			NCSS +
			"sega_c1 #" +
			NCSS +
			"cui_button5{width: 30px;height: 30px;background-color: aliceblue;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: -5px;right:0px;top: 31px;bottom: 0px;}." +
			NCSS +
			"sega_c1 #" +
			NCSS +
			"cui_button4{width: 30px;height: 30px;background-color: #ffe000;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 35px;right:0px;top: 3px;bottom: 0px;}." +
			NCSS +
			"sega_c1 #" +
			NCSS +
			"cui_button6{width: 30px;height: 30px;background-color: rgba(0,166,158,1.00);position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 79px;right:0px;top: -15px;bottom: 0px;}." +
			NCSS +
			"sega_c1 #" +
			NCSS +
			"ConButtons{border:solid 5px rgba(0,0,0,0.00);width: 137px;height: 120px;max-width: 500px;position: relative;left: 129px;top: -22px;margin: 0 auto;}." +
			NCSS +
			"sega_c1 #" +
			NCSS +
			"ConSelect{width: 87px;height: 30px;max-width: 500px;position: relative;left: 133px;top: -227px;margin: 0 auto;border: solid 0.1px rgba(146, 145, 145, 0.74);}." +
			NCSS +
			"sega_c1 #" +
			NCSS +
			"ConStart{width: 40px;height: 20px;max-width: 500px;position: relative;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 0px;top: -90px;margin: 0 auto;}." +
			NCSS +
			"sega_saturn_c1 #" +
			NCSS +
			"dpadl{width: 30px;height: 30px;background-color: aliceblue;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 0px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"sega_saturn_c1 #" +
			NCSS +
			"dpadr{width: 30px;height: 30px;background-color: chartreuse;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 73px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"sega_saturn_c1 #" +
			NCSS +
			"dpadu{position:absolute !important;width: 30px;height: 30px;background-color: #5a0000;position:absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 34px;right:0px;top: 4px;bottom: 0px;}." +
			NCSS +
			"sega_saturn_c1 #" +
			NCSS +
			"dpadd{width: 30px;height: 30px;background-color: aquamarine;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 35px;right:0px;top: 66px;bottom: 0px;}." +
			NCSS +
			"sega_saturn_c1 #" +
			NCSS +
			"ConDpad{border:solid 5px rgba(0,0,0,0.00);width: 100px;height: 100px;max-width: 500px;position: relative;left: -138px;top: 92px;margin: 0 auto;}." +
			NCSS +
			"sega_saturn_c1 #" +
			NCSS +
			"cui_button1{width: 38px;height: 38px;background-color: #0088ff;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 7px;right:0px;top: 85px;bottom: 0px;}." +
			NCSS +
			"sega_saturn_c1 #" +
			NCSS +
			"cui_button2{width: 38px;height: 38px;background-color: #1cff01;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 56px;right:0px;top: 50px;bottom: 0px;}." +
			NCSS +
			"sega_saturn_c1 #" +
			NCSS +
			"cui_button3{width: 38px;height: 38px;background-color: #cc00ff;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 112px;right:0px;top: 29px;bottom: 0px;}." +
			NCSS +
			"sega_saturn_c1 #" +
			NCSS +
			"cui_button5{width: 30px;height: 30px;background-color: aliceblue;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: -7px;right:0px;top: 31px;bottom: 0px;}." +
			NCSS +
			"sega_saturn_c1 #" +
			NCSS +
			"cui_button4{width: 30px;height: 30px;background-color: #ffe000;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 35px;right:0px;top: 3px;bottom: 0px;}." +
			NCSS +
			"sega_saturn_c1 #" +
			NCSS +
			"cui_button6{width: 30px;height: 30px;background-color: rgba(0,166,158,1.00);position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 79px;right:0px;top: -15px;bottom: 0px;}." +
			NCSS +
			"sega_saturn_c1 #" +
			NCSS +
			"ConButtons{border:solid 5px rgba(0,0,0,0.00);width: 137px;height: 120px;max-width: 500px;position: relative;left: 133px;top: -22px;margin: 0 auto;}." +
			NCSS +
			"sega_saturn_c1 #" +
			NCSS +
			"ConL2{border: solid 0.1px rgba(146, 145, 145, 0.74);width: 87px;height: 30px;max-width: 500px;position: relative;left: -143px;top: -247px;margin: 0 auto;background: rgb(160, 77, 108);}." +
			NCSS +
			"sega_saturn_c1 #" +
			NCSS +
			"ConR2{border: solid 0.1px rgba(146, 145, 145, 0.74);width: 87px;height: 30px;max-width: 500px;position: relative;left: 133px;top: -277px;margin: 0 auto;background: rgba(0,155,255,1.00);}." +
			NCSS +
			"sega_saturn_c1 #" +
			NCSS +
			"ConStart{width: 41px;height: 20px;max-width: 500px;position: relative;border: solid 0.1px rgba(146, 145, 145, 0.74);left: -1px;top: -58px;margin: 0 auto;background: rgba(77,120,160,1.00);}." +
			NCSS +
			"n64_c1 #" +
			NCSS +
			"dpadl{width: 30px;height: 30px;background-color: aliceblue;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 10px;right:0px;top: 38px;bottom: 0px;}." +
			NCSS +
			"n64_c1 #" +
			NCSS +
			"dpadr{width: 30px;height: 30px;background-color: chartreuse;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 62px;right:0px;top: 38px;bottom: 0px;}." +
			NCSS +
			"n64_c1 #" +
			NCSS +
			"dpadu{position:absolute !important;width: 30px;height: 30px;background-color: #5a0000;position:absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 38px;right:0px;top: 10px;bottom: 0px;}." +
			NCSS +
			"n64_c1 #" +
			NCSS +
			"dpadd{width: 30px;height: 30px;background-color: aquamarine;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 37px;right:0px;top: 65px;bottom: 0px;}." +
			NCSS +
			"n64_c1 #" +
			NCSS +
			"ConDpad{border:solid 5px rgba(0,0,0,0.00);width: 85px;height: 100px;max-width: 500px;position: relative;left: -131px;top: 59px;margin: 0 auto;}." +
			NCSS +
			"n64_c1 #" +
			NCSS +
			"AnalogRl{width: 30px;height: 30px;background-color: aliceblue;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 7px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"n64_c1 #" +
			NCSS +
			"AnalogRr{width: 30px;height: 30px;background-color: chartreuse;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 62px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"n64_c1 #" +
			NCSS +
			"AnalogRu{width: 30px;height: 30px;background-color: #5a0000;position:absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 36px;right:0px;top: 10px;bottom: 0px;}." +
			NCSS +
			"n64_c1 #" +
			NCSS +
			"AnalogRd{width: 30px;height: 30px;background-color: aquamarine;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 35px;right:0px;top: 65px;bottom: 0px;}." +
			NCSS +
			"n64_c1 #" +
			NCSS +
			"ConAnalogR{border: solid 5px rgba(0, 0, 0, 0);width: 85px;height: 100px;max-width: 500px;position: relative;left: 130px;top: -441px;margin: 0 auto;}." +
			NCSS +
			"n64_c1 #" +
			NCSS +
			"AnalogLl{width: 30px;height: 30px;background-color: aliceblue;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 7px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"n64_c1 #" +
			NCSS +
			"AnalogLr{width: 30px;height: 30px;background-color: chartreuse;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 62px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"n64_c1 #" +
			NCSS +
			"AnalogLu{width: 30px;height: 30px;background-color: #5a0000;position:absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 36px;right:0px;top: 10px;bottom: 0px;}." +
			NCSS +
			"n64_c1 #" +
			NCSS +
			"AnalogLd{width: 30px;height: 30px;background-color: aquamarine;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 35px;right:0px;top: 65px;bottom: 0px;}." +
			NCSS +
			"n64_c1 #" +
			NCSS +
			"ConAnalogL{border:solid 5px rgba(0,0,0,0.00);width: 85px;height: 100px;max-width: 500px;position: relative;left: -6px;top: -227px;margin: 0 auto;}." +
			NCSS +
			"n64_c1 #" +
			NCSS +
			"cui_button1{width: 35px;height: 35px;background-color: #0088ff;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 15px;right:0px;top: 61px;bottom: 0px;}." +
			NCSS +
			"n64_c1 #" +
			NCSS +
			"cui_button2{width: 35px;height: 35px;background-color: #1cff01;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 42px;right:0px;top: 92px;bottom: 0px;}." +
			NCSS +
			"n64_c1 #" +
			NCSS +
			"ConButtons{border:solid 5px rgba(0,0,0,0.00);width: 130px;height: 120px;max-width: 500px;position: relative;left: 111px;top: -66px;margin: 0 auto;}." +
			NCSS +
			"n64_c1 #" +
			NCSS +
			"ConL1{border: solid 0.1px rgba(146, 145, 145, 0.74);width: 70px;height: 30px;max-width: 500px;position: relative;left: -120px;top: -253px;margin: 0 auto;background: rgba(77,120,160,1.00);}." +
			NCSS +
			"n64_c1 #" +
			NCSS +
			"ConR1{border: solid 0.1px rgba(146, 145, 145, 0.74);width: 70px;height: 30px;max-width: 500px;position: relative;left: 127px;top: -282px;margin: 0 auto;background: rgb(160, 77, 131);}." +
			NCSS +
			"n64_c1 #" +
			NCSS +
			"ConL2{border: solid 0.1px rgba(146, 145, 145, 0.74);width: 60px;height: 40px;max-width: 500px;position: relative;left: 4px;top: -333px;margin: 0 auto;background: rgba(77,120,160,1.00);}." +
			NCSS +
			"n64_c1 #" +
			NCSS +
			"ConStart{width: 40px; height: 40px; max-width: 500px; position: relative;border: solid 0.1px rgba(146, 145, 145, 0.74); left: 2px; top: -131px; margin: 0 auto; background: rgba(77,120,160,1.00);}." +
			NCSS +
			"advance_tabs{display:none}." +
			NCSS +
			"advance_tabsP2{display:none}." +
			NCSS +
			"advance_tabsP3{display:none}." +
			NCSS +
			"advance_tabsP4{display:none}." +
			NCSS +
			"vboy_c1 #" +
			NCSS +
			"dpadl{width: 30px;height: 30px;background-color: aliceblue;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 7px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"vboy_c1 #" +
			NCSS +
			"dpadr{width: 30px;height: 30px;background-color: chartreuse;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 62px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"vboy_c1 #" +
			NCSS +
			"dpadu{position:absolute !important;width: 30px;height: 30px;background-color: #5a0000;position:absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 36px;right:0px;top: 10px;bottom: 0px;}." +
			NCSS +
			"vboy_c1 #" +
			NCSS +
			"dpadd{width: 30px;height: 30px;background-color: aquamarine;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 35px;right:0px;top: 64px;bottom: 0px;}." +
			NCSS +
			"vboy_c1 #" +
			NCSS +
			"ConDpad{border:solid 5px rgba(0,0,0,0.00);width: 85px;height: 100px;max-width: 500px;position: relative;left: -157px;top: 8px;margin: 0 auto;}." +
			NCSS +
			"vboy_c1 #" +
			NCSS +
			"AnalogRl{width: 30px;height: 30px;background-color: aliceblue;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 7px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"vboy_c1 #" +
			NCSS +
			"AnalogRr{width: 30px;height: 30px;background-color: chartreuse;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 62px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"vboy_c1 #" +
			NCSS +
			"AnalogRu{width: 30px;height: 30px;background-color: #5a0000;position:absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 36px;right:0px;top: 10px;bottom: 0px;}." +
			NCSS +
			"vboy_c1 #" +
			NCSS +
			"AnalogRd{width: 30px;height: 30px;background-color: aquamarine;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 35px;right:0px;top: 64px;bottom: 0px;}." +
			NCSS +
			"vboy_c1 #" +
			NCSS +
			"ConAnalogR{border: solid 5px rgba(0, 0, 0, 0);;width: 85px;height: 100px;max-width: 500px;position: relative;left: 141px;top: -353px;margin: 0 auto;}." +
			NCSS +
			"vboy_c1 #" +
			NCSS +
			"cui_button1{width: 35px;height: 35px;background-color: #0088ff;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: -8px;right:0px;top: 39px;bottom: 0px;}." +
			NCSS +
			"vboy_c1 #" +
			NCSS +
			"cui_button2{width: 35px;height: 35px;background-color: #1cff01;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 29px;right:0px;top: 22px;bottom: 0px;}." +
			NCSS +
			"vboy_c1 #" +
			NCSS +
			"ConButtons{border:solid 5px rgba(0,0,0,0.00);width: 130px;height: 120px;max-width: 500px;position: relative;left: 111px;top: -66px;margin: 0 auto;}." +
			NCSS +
			"vboy_c1 #" +
			NCSS +
			"ConL1{border: solid 0.1px rgba(146, 145, 145, 0.74);width: 70px;height: 30px;max-width: 500px;position: relative;left: -270px;top: -273px;margin: 0 auto;background: rgba(77,120,160,1.00);}." +
			NCSS +
			"vboy_c1 #" +
			NCSS +
			"ConR1{border: solid 0.1px rgba(146, 145, 145, 0.74);width: 70px;height: 30px;max-width: 500px;position: relative;left: 267px;top: -302px;margin: 0 auto;background: rgb(160, 77, 131);}." +
			NCSS +
			"vboy_c1 #" +
			NCSS +
			"ConStart{width: 30px; height: 30px; max-width: 500px; position: relative;border: solid 0.1px rgba(146, 145, 145, 0.74); left: -58px; top: -181px; margin: 0 auto; background: rgba(77,120,160,1.00);}." +
			NCSS +
			"vboy_c1 #" +
			NCSS +
			"ConSelect{width: 30px; height: 30px; max-width: 500px; position: relative;border: solid 0.1px rgba(146, 145, 145, 0.74); left: -91px; top: -164px; margin: 0 auto; background: rgba(153,0,255,1.00);}";
		Ncss4 =
			"." +
			NCSS +
			"psx_c1 #" +
			NCSS +
			"dpadl{width: 30px;height: 30px;background-color: aliceblue;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 7px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"psx_c1 #" +
			NCSS +
			"dpadr{width: 30px;height: 30px;background-color: chartreuse;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 65px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"psx_c1 #" +
			NCSS +
			"dpadu{position:absolute !important;width: 30px;height: 30px;background-color: #5a0000;position:absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 36px;right:0px;top: 8px;bottom: 0px;}." +
			NCSS +
			"psx_c1 #" +
			NCSS +
			"dpadd{width: 30px;height: 30px;background-color: aquamarine;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 36px;right:0px;top: 65px;bottom: 0px;}." +
			NCSS +
			"psx_c1 #" +
			NCSS +
			"ConDpad{border:solid 5px rgba(0,0,0,0.00);width: 85px;height: 100px;max-width: 500px;position: relative;left: -151px;top: 59px;margin: 0 auto;}." +
			NCSS +
			"psx_c1 #" +
			NCSS +
			"AnalogRl{width: 30px;height: 30px;background-color: aliceblue;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 7px;right:0px;top: 39px;bottom: 0px;}." +
			NCSS +
			"psx_c1 #" +
			NCSS +
			"AnalogRr{width: 30px;height: 30px;background-color: chartreuse;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 65px;right:0px;top: 39px;bottom: 0px;}." +
			NCSS +
			"psx_c1 #" +
			NCSS +
			"AnalogRu{width: 30px;height: 30px;background-color: #5a0000;position:absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 36px;right:0px;top: 10px;bottom: 0px;}." +
			NCSS +
			"psx_c1 #" +
			NCSS +
			"AnalogRd{width: 30px;height: 30px;background-color: aquamarine;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 36px;right:0px;top: 68px;bottom: 0px;}." +
			NCSS +
			"psx_c1 #" +
			NCSS +
			"ConAnalogR{border: solid 5px rgba(0, 0, 0, 0);width: 85px;height: 100px;max-width: 500px;position: relative;left: 55px;top: -487px;margin: 0 auto;}." +
			NCSS +
			"psx_c1 #" +
			NCSS +
			"AnalogLl{width: 30px;height: 30px;background-color: aliceblue;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 7px;right:0px;top: 39px;bottom: 0px;}." +
			NCSS +
			"psx_c1 #" +
			NCSS +
			"AnalogLr{width: 30px;height: 30px;background-color: chartreuse;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 65px;right:0px;top: 39px;bottom: 0px;}." +
			NCSS +
			"psx_c1 #" +
			NCSS +
			"AnalogLu{width: 30px;height: 30px;background-color: #5a0000;position:absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 36px;right:0px;top: 10px;bottom: 0px;}." +
			NCSS +
			"psx_c1 #" +
			NCSS +
			"AnalogLd{width: 30px;height: 30px;background-color: aquamarine;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 36px;right:0px;top: 68px;bottom: 0px;}." +
			NCSS +
			"psx_c1 #" +
			NCSS +
			"ConAnalogL{border:solid 5px rgba(0,0,0,0.00);width: 85px;height: 100px;max-width: 500px;position: relative;left: -80px;top: -377px;margin: 0 auto;}." +
			NCSS +
			"psx_c1 #" +
			NCSS +
			"cui_button1{width: 35px;height: 35px;background-color: #0088ff;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 3px;right:0px;top: 50px;bottom: 0px;}." +
			NCSS +
			"psx_c1 #" +
			NCSS +
			"cui_button2{width: 35px;height: 35px;background-color: #1cff01;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 41px;right:0px;top: 88px;bottom: 0px;}." +
			NCSS +
			"psx_c1 #" +
			NCSS +
			"cui_button3{width: 35px;height: 35px;background-color:rgba(255,0,4,1.00);position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 79px;right:0px;top: 50px;bottom: 0px;}." +
			NCSS +
			"psx_c1 #" +
			NCSS +
			"cui_button4{width: 35px;height: 35px;background-color:rgba(255,245,0,1.00);position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 41px;right:0px;top: 12px;bottom: 0px;}." +
			NCSS +
			"psx_c1 #" +
			NCSS +
			"ConButtons{border:solid 5px rgba(0,0,0,0.00);width: 130px;height: 120px;max-width: 500px;position: relative;left: 141px;top: -66px;margin: 0 auto;}." +
			NCSS +
			"psx_c1 #" +
			NCSS +
			"ConL1{border: solid 0.1px rgba(146, 145, 145, 0.74);width: 70px;height: 30px;max-width: 500px;position: relative;left: -139px;top: -262px;margin: 0 auto;background: rgba(77,120,160,1.00);}." +
			NCSS +
			"psx_c1 #" +
			NCSS +
			"ConR1{border: solid 0.1px rgba(146, 145, 145, 0.74);width: 70px;height: 30px;max-width: 500px;position: relative;left: 131px;top: -292px;margin: 0 auto;background: rgb(160, 77, 131);}." +
			NCSS +
			"psx_c1 #" +
			NCSS +
			"ConL2{border: solid 0.1px rgba(146, 145, 145, 0.74);width: 60px;height: 40px;max-width: 500px;position: relative;left: -216px;top: -333px;margin: 0 auto;background: rgba(77,120,160,1.00);}." +
			NCSS +
			"psx_c1 #" +
			NCSS +
			"ConR2{border: solid 0.1px rgba(146, 145, 145, 0.74);width: 60px;height: 40px;max-width: 500px;position: relative;left: 207px;top: -373px;margin: 0 auto;background: rgba(0,255,100,1.00);}." +
			NCSS +
			"psx_c1 #" +
			NCSS +
			"ConL3{border: solid 0.1px rgba(146, 145, 145, 0.74);width: 60px;height: 40px;max-width: 500px;position: relative;left: -73px;top: -183px;margin: 0 auto;background: rgba(77,120,160,1);}." +
			NCSS +
			"psx_c1 #" +
			NCSS +
			"ConR3{border: solid 0.1px rgba(146, 145, 145, 0.74);width: 60px;height: 40px;max-width: 500px;position: relative;left: 67px;top: -223px;margin: 0 auto;background: rgba(0,255,100,1);}." +
			NCSS +
			"psx_c1 #" +
			NCSS +
			"ConStart{width: 40px; height: 20px; max-width: 500px; position: relative; border: solid 0.1px rgba(146, 145, 145, 0.74); left: 35px; top: -157px; margin: 0 auto; background: rgba(77,120,160,1.00);}." +
			NCSS +
			"psx_c1 #" +
			NCSS +
			"ConSelect{width: 40px; height: 20px; max-width: 500px; position: relative; border: solid 0.1px rgba(146, 145, 145, 0.74); left: -48px; top: -137px; margin: 0 auto; background: rgba(255,0,221,1.00);}." +
			NCSS +
			"gc_c1 #" +
			NCSS +
			"dpadl{width: 30px;height: 30px;background-color: aliceblue;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 7px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"gc_c1 #" +
			NCSS +
			"dpadr{width: 30px;height: 30px;background-color: chartreuse;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 62px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"gc_c1 #" +
			NCSS +
			"dpadu{position:absolute !important;width: 30px;height: 30px;background-color: #5a0000;position:absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 36px;right:0px;top: 10px;bottom: 0px;}." +
			NCSS +
			"gc_c1 #" +
			NCSS +
			"dpadd{width: 30px;height: 30px;background-color: aquamarine;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 35px;right:0px;top: 35px;bottom: 0px;}." +
			NCSS +
			"gc_c1 #" +
			NCSS +
			"ConDpad{border:solid 5px rgba(0,0,0,0.00);width: 85px;height: 100px;max-width: 500px;position: relative;left: -87px;top: 181px;margin: 0 auto;}." +
			NCSS +
			"gc_c1 #" +
			NCSS +
			"AnalogRl{width: 30px;height: 30px;background-color: aliceblue;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 7px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"gc_c1 #" +
			NCSS +
			"AnalogRr{width: 30px;height: 30px;background-color: chartreuse;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 62px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"gc_c1 #" +
			NCSS +
			"AnalogRu{width: 30px;height: 30px;background-color: #5a0000;position:absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 36px;right:0px;top: 10px;bottom: 0px;}." +
			NCSS +
			"gc_c1 #" +
			NCSS +
			"AnalogRd{width: 30px;height: 30px;background-color: aquamarine;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 35px;right:0px;top: 35px;bottom: 0px;}." +
			NCSS +
			"gc_c1 #" +
			NCSS +
			"ConAnalogR{border: solid 5px rgba(0, 0, 0, 0);width: 85px;height: 100px;max-width: 500px;position: relative;left: 73px;top: -349px;margin: 0 auto;}." +
			NCSS +
			"gc_c1 #" +
			NCSS +
			"AnalogLl{width: 30px;height: 30px;background-color: aliceblue;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 7px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"gc_c1 #" +
			NCSS +
			"AnalogLr{width: 30px;height: 30px;background-color: chartreuse;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 62px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"gc_c1 #" +
			NCSS +
			"AnalogLu{width: 30px;height: 30px;background-color: #5a0000;position:absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 36px;right:0px;top: 10px;bottom: 0px;}." +
			NCSS +
			"gc_c1 #" +
			NCSS +
			"AnalogLd{width: 30px;height: 30px;background-color: aquamarine;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 35px;right:0px;top: 35px;bottom: 0px;}." +
			NCSS +
			"gc_c1 #" +
			NCSS +
			"ConAnalogL{border:solid 5px rgba(0,0,0,0.00);width: 85px;height: 100px;max-width: 500px;position: relative;left: -156px;top: -350px;margin: 0 auto;}." +
			NCSS +
			"gc_c1 #" +
			NCSS +
			"cui_button1{width: 35px;height: 35px;background-color: #0088ff;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 1px;right:0px;top: 90px;bottom: 0px;}." +
			NCSS +
			"gc_c1 #" +
			NCSS +
			"cui_button2{width: 45px;height: 45px;background-color: #1cff01;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 51px;right:0px;top: 58px;bottom: 0px;}." +
			NCSS +
			"gc_c1 #" +
			NCSS +
			"cui_button3{width: 35px;height: 35px;background-color:rgba(255,0,4,1.00);position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 109px;right:0px;top: 50px;bottom: 0px;}." +
			NCSS +
			"gc_c1 #" +
			NCSS +
			"cui_button4{width: 35px;height: 35px;background-color:rgba(255,245,0,1.00);position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 41px;right:0px;top: 12px;bottom: 0px;}." +
			NCSS +
			"gc_c1 #" +
			NCSS +
			"ConButtons{border:solid 5px rgba(0,0,0,0.00);width: 130px;height: 120px;max-width: 500px;position: relative;left: 141px;top: -66px;margin: 0 auto;}." +
			NCSS +
			"gc_c1 #" +
			NCSS +
			"ConL1{border: solid 0.1px rgba(146, 145, 145, 0.74);width: 70px;height: 30px;max-width: 500px;position: relative;left: -139px;top: -262px;margin: 0 auto;background: rgba(77,120,160,1.00);}." +
			NCSS +
			"gc_c1 #" +
			NCSS +
			"ConR1{border: solid 0.1px rgba(146, 145, 145, 0.74);width: 70px;height: 30px;max-width: 500px;position: relative;left: 151px;top: -292px;margin: 0 auto;background: rgb(160, 77, 131);}." +
			NCSS +
			"gc_c1 #" +
			NCSS +
			"ConL2{border: solid 0.1px rgba(146, 145, 145, 0.74);width: 60px;height: 40px;max-width: 500px;position: relative;left: -216px;top: -333px;margin: 0 auto;background: rgba(77,120,160,1.00);}." +
			NCSS +
			"gc_c1 #" +
			NCSS +
			"ConR2{border: solid 0.1px rgba(146, 145, 145, 0.74);width: 60px;height: 40px;max-width: 500px;position: relative;left: 227px;top: -373px;margin: 0 auto;background: rgba(0,255,100,1.00);}." +
			NCSS +
			"gc_c1 #" +
			NCSS +
			"ConStart{width: 40px; height: 20px; max-width: 500px; position: relative;border: solid 0.1px rgba(146, 145, 145, 0.74); left: -1px; top: -136px; margin: 0 auto; background: rgba(77,120,160,1.00);}." +
			NCSS +
			"gc_c1 #" +
			NCSS +
			"ConSelect{height: 20px;}." +
			NCSS +
			"psp_c1 #" +
			NCSS +
			"dpadl{width: 30px;height: 30px;background-color: aliceblue;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 7px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"psp_c1 #" +
			NCSS +
			"dpadr{width: 30px;height: 30px;background-color: chartreuse;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 62px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"psp_c1 #" +
			NCSS +
			"dpadu{position:absolute !important;width: 30px;height: 30px;background-color: #5a0000;position:absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 36px;right:0px;top: 10px;bottom: 0px;}." +
			NCSS +
			"psp_c1 #" +
			NCSS +
			"dpadd{width: 30px;height: 30px;background-color: aquamarine;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 35px;right:0px;top: 35px;bottom: 0px;}." +
			NCSS +
			"psp_c1 #" +
			NCSS +
			"ConDpad{border:solid 5px rgba(0,0,0,0.00);width: 85px;height: 100px;max-width: 500px;position: relative;left: -243px;top: 75px;margin: 0 auto;}." +
			NCSS +
			"psp_c1 #" +
			NCSS +
			"AnalogLl{width: 30px;height: 30px;background-color: aliceblue;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 7px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"psp_c1 #" +
			NCSS +
			"AnalogLr{width: 30px;height: 30px;background-color: chartreuse;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 62px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"psp_c1 #" +
			NCSS +
			"AnalogLu{width: 30px;height: 30px;background-color: #5a0000;position:absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 36px;right:0px;top: 10px;bottom: 0px;}." +
			NCSS +
			"psp_c1 #" +
			NCSS +
			"AnalogLd{width: 30px;height: 30px;background-color: aquamarine;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 35px;right:0px;top: 35px;bottom: 0px;}." +
			NCSS +
			"psp_c1 #" +
			NCSS +
			"ConAnalogL{border:solid 5px rgba(0,0,0,0.00);width: 85px;height: 100px;max-width: 500px;position: relative;left: -242px;top: -178px;margin: 0 auto;}." +
			NCSS +
			"psp_c1 #" +
			NCSS +
			"cui_button1{width: 35px;height: 35px;background-color: #0088ff;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 3px;right:0px;top: 50px;bottom: 0px;}." +
			NCSS +
			"psp_c1 #" +
			NCSS +
			"cui_button2{width: 35px;height: 35px;background-color: #1cff01;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 41px;right:0px;top: 88px;bottom: 0px;}." +
			NCSS +
			"psp_c1 #" +
			NCSS +
			"cui_button3{width: 35px;height: 35px;background-color:rgba(255,0,4,1.00);position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 79px;right:0px;top: 50px;bottom: 0px;}." +
			NCSS +
			"psp_c1 #" +
			NCSS +
			"cui_button4{width: 35px;height: 35px;background-color:rgba(255,245,0,1.00);position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 41px;right:0px;top: 12px;bottom: 0px;}." +
			NCSS +
			"psp_c1 #" +
			NCSS +
			"ConButtons{border:solid 5px rgba(0,0,0,0.00);width: 130px;height: 120px;max-width: 500px;position: relative;left: 241px;top: -48px;margin: 0 auto;}." +
			NCSS +
			"psp_c1 #" +
			NCSS +
			"ConL1{border: solid 0.1px rgba(146, 145, 145, 0.74);width: 70px;height: 30px;max-width: 500px;position: relative;left: -229px;top: -261px;margin: 0 auto;background: rgba(77,120,160,1.00);}." +
			NCSS +
			"psp_c1 #" +
			NCSS +
			"ConR1{border: solid 0.1px rgba(146, 145, 145, 0.74);width: 70px;height: 30px;max-width: 500px;position: relative;left: 228px;top: -291px;margin: 0 auto;background: rgb(160, 77, 131);}." +
			NCSS +
			"psp_c1 #" +
			NCSS +
			"ConStart{width: 40px; height: 20px; max-width: 500px; position: relative;border: solid 0.1px rgba(146, 145, 145, 0.74); left: 169px; top: -12px; margin: 0 auto; background: rgba(77,120,160,1.00);}." +
			NCSS +
			"psp_c1 #" +
			NCSS +
			"ConSelect{width: 40px; height: 20px; max-width: 500px; position: relative;border: solid 0.1px rgba(146, 145, 145, 0.74); left: 125px; top: 8px; margin: 0 auto; background: rgba(255,0,221,1.00);}." +
			NCSS +
			"nds_c1 #" +
			NCSS +
			"dpadl{width: 30px;height: 30px;background-color: aliceblue;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 7px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"nds_c1 #" +
			NCSS +
			"dpadr{width: 30px;height: 30px;background-color: chartreuse;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 62px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"nds_c1 #" +
			NCSS +
			"dpadu{position:absolute !important;width: 30px;height: 30px;background-color: #5a0000;position:absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 36px;right:0px;top: 10px;bottom: 0px;}." +
			NCSS +
			"nds_c1 #" +
			NCSS +
			"dpadd{width: 30px;height: 30px;background-color: aquamarine;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 35px;right:0px;top: 65px;bottom: 0px;}." +
			NCSS +
			"nds_c1 #" +
			NCSS +
			"ConDpad{border:solid 5px rgba(0,0,0,0.00);width: 85px;height: 100px;max-width: 500px;position: relative;left: -147px;top: 235px;margin: 0 auto;}." +
			NCSS +
			"nds_c1 #" +
			NCSS +
			"cui_button1{width: 25px;height: 25px;background-color: #0088ff;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 24px;right:0px;top: 69px;bottom: 0px;}." +
			NCSS +
			"nds_c1 #" +
			NCSS +
			"cui_button2{width: 25px;height: 25px;background-color: #1cff01;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 47px;right:0px;top: 93px;bottom: 0px;}." +
			NCSS +
			"nds_c1 #" +
			NCSS +
			"cui_button3{width: 25px;height: 25px;background-color: rgba(255,0,4,1.00);position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 72px;right:0px;top: 68px;bottom: 0px;}." +
			NCSS +
			"nds_c1 #" +
			NCSS +
			"cui_button4{width: 25px;height: 25px;background-color: rgba(255,221,0,1.00);position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 47px;right:0px;top: 47px;bottom: 0px;}." +
			NCSS +
			"nds_c1 #" +
			NCSS +
			"ConButtons{border:solid 5px rgba(0,0,0,0.00);width: 120px;height: 120px;max-width: 500px;position: relative;left: 152px;top: 86px;margin: 0 auto;}." +
			NCSS +
			"nds_c1 #" +
			NCSS +
			"ConL1{border: solid 0.1px rgba(146, 145, 145, 0.74);width: 70px;height: 30px;max-width: 500px;position: relative;left: -200px;top: -81px;margin: 0 auto;background: rgba(77,120,160,1.00);}." +
			NCSS +
			"nds_c1 #" +
			NCSS +
			"ConR1{border: solid 0.1px rgba(146, 145, 145, 0.74);width: 70px;height: 30px;max-width: 500px;position: relative;left: 207px;top: -111px;margin: 0 auto;background: rgb(160, 77, 131);}." +
			NCSS +
			"nds_c1 #" +
			NCSS +
			"ConStart{width: 40px; height: 20px; max-width: 500px; position: relative;border: solid 0.1px rgba(146, 145, 145, 0.74); left: 122px; top: 59px; margin: 0 auto; background: rgba(77,120,160,1.00);}." +
			NCSS +
			"nds_c1 #" +
			NCSS +
			"ConSelect{width: 40px; height: 20px; max-width: 500px; position: relative;border: solid 0.1px rgba(146, 145, 145, 0.74); left: 122px; top: 99px; margin: 0 auto; background: rgba(0,0,0,1.00);}." +
			NCSS +
			"dc_c1 #" +
			NCSS +
			"dpadl{width: 30px;height: 30px;background-color: aliceblue;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 7px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"dc_c1 #" +
			NCSS +
			"dpadr{width: 30px;height: 30px;background-color: chartreuse;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 62px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"dc_c1 #" +
			NCSS +
			"dpadu{position:absolute !important;width: 30px;height: 30px;background-color: #5a0000;position:absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 36px;right:0px;top: 10px;bottom: 0px;}." +
			NCSS +
			"dc_c1 #" +
			NCSS +
			"dpadd{width: 30px;height: 30px;background-color: aquamarine;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 35px;right:0px;top: 35px;bottom: 0px;}." +
			NCSS +
			"dc_c1 #" +
			NCSS +
			"ConDpad{border:solid 5px rgba(0,0,0,0.00);width: 85px;height: 100px;max-width: 500px;position: relative;left: -121px;top: 152px;margin: 0 auto;}." +
			NCSS +
			"dc_c1 #" +
			NCSS +
			"AnalogLl{width: 30px;height: 30px;background-color: aliceblue;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 7px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"dc_c1 #" +
			NCSS +
			"AnalogLr{width: 30px;height: 30px;background-color: chartreuse;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 62px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"dc_c1 #" +
			NCSS +
			"AnalogLu{width: 30px;height: 30px;background-color: #5a0000;position:absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 36px;right:0px;top: 10px;bottom: 0px;}." +
			NCSS +
			"dc_c1 #" +
			NCSS +
			"AnalogLd{width: 30px;height: 30px;background-color: aquamarine;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 35px;right:0px;top: 35px;bottom: 0px;}." +
			NCSS +
			"dc_c1 #" +
			NCSS +
			"ConAnalogL{border:solid 5px rgba(0,0,0,0.00);width: 85px;height: 100px;max-width: 500px;position: relative;left: -149px;top: -274px;margin: 0 auto;}." +
			NCSS +
			"dc_c1 #" +
			NCSS +
			"cui_button1{width: 30px;height: 30px;background-color: #0088ff;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 14px;right:0px;top: 63px;bottom: 0px;}." +
			NCSS +
			"dc_c1 #" +
			NCSS +
			"cui_button2{width: 30px;height: 30px;background-color: #1cff01;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 47px;right:0px;top: 93px;bottom: 0px;}." +
			NCSS +
			"dc_c1 #" +
			NCSS +
			"cui_button3{width: 30px;height: 30px;background-color: rgba(255,0,4,1.00);position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 79px;right:0px;top: 63px;bottom: 0px;}." +
			NCSS +
			"dc_c1 #" +
			NCSS +
			"cui_button4{width: 30px;height: 30px;background-color: rgba(255,221,0,1.00);position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 47px;right:0px;top: 33px;bottom: 0px;}." +
			NCSS +
			"dc_c1 #" +
			NCSS +
			"ConButtons{border:solid 5px rgba(0,0,0,0.00);width: 120px;height: 120px;max-width: 500px;position: relative;left: 124px;top: -36px;margin: 0 auto;}." +
			NCSS +
			"dc_c1 #" +
			NCSS +
			"ConL1{border: solid 0.1px rgba(146, 145, 145, 0.74);width: 70px;height: 30px;max-width: 500px;position: relative;left: -120px;top: -231px;margin: 0 auto;background: rgba(77,120,160,1.00);}." +
			NCSS +
			"dc_c1 #" +
			NCSS +
			"ConR1{border: solid 0.1px rgba(146, 145, 145, 0.74);width: 70px;height: 30px;max-width: 500px;position: relative;left: 127px;top: -261px;margin: 0 auto;background: rgb(160, 77, 131);}." +
			NCSS +
			"dc_c1 #" +
			NCSS +
			"ConStart{width: 40px; height: 40px; max-width: 500px; position: relative;border: solid 0.1px rgba(146, 145, 145, 0.74); left: 2px; top: 19px; margin: 0 auto; background: rgba(77,120,160,1.00);}." +
			NCSS +
			"gba_c1 #" +
			NCSS +
			"dpadl{width: 28px;height: 30px;background-color: aliceblue;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 8px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"gba_c1 #" +
			NCSS +
			"dpadr{width: 28px;height: 30px;background-color: chartreuse;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 64px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"gba_c1 #" +
			NCSS +
			"dpadu{position:absolute !important;width: 30px;height: 27px;position: relative;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 35px;right:0px;top: 11px;bottom: 0px;}." +
			NCSS +
			"gba_c1 #" +
			NCSS +
			"dpadd{width: 30px;height: 27px;position: relative;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 35px;right:0px;top: 66px;bottom: 0px;}." +
			NCSS +
			"gba_c1 #" +
			NCSS +
			"ConDpad{border:solid 5px rgba(0,0,0,0.00);width: 98px;height: 100px;max-width: 500px;position: relative;left: -181px;top: 66px;margin: 0 auto;}." +
			NCSS +
			"gba_c1 #" +
			NCSS +
			"ConL1{border: solid 0.1px rgba(146, 145, 145, 0.74);width: 126px;height: 30px;max-width: 500px;position: relative;left: -166px;top: -271px;margin: 0 auto;background: rgba(77,120,160,1.00);}." +
			NCSS +
			"gba_c1 #" +
			NCSS +
			"ConR1{border: solid 0.1px rgba(146, 145, 145, 0.74);width: 126px;height: 30px;max-width: 500px;position: relative;left: 165px;top: -301px;margin: 0 auto;background: rgb(160, 77, 131);}." +
			NCSS +
			"gba_c1 #" +
			NCSS +
			"cui_button1{width: 35px;height: 35px;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 48px;right:0px;top: 39px;bottom: 0px;}." +
			NCSS +
			"gba_c1 #" +
			NCSS +
			"cui_button2{width: 35px;height: 35px;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 93px;right:0px;top: 24px;bottom: 0px;}." +
			NCSS +
			"gba_c1 #" +
			NCSS +
			"ConButtons{border:solid 5px rgba(0,0,0,0.00);width: 150px;height: 120px;max-width: 500px;position: relative;left: 164px;top: -36px;margin: 0 auto;}." +
			NCSS +
			"gba_c1 #" +
			NCSS +
			"ConSelect{width: 55px;height: 25px;max-width: 500px;position: relative;border: solid 0.1px rgba(146, 145, 145, 0.74);left: -167px;top: -37px;margin: 0 auto;-ms-transform: rotate(15deg);-webkit-transform: rotate(15deg);transform: rotate(15deg);}." +
			NCSS +
			"gba_c1 #" +
			NCSS +
			"ConStart{width: 55px;height: 25px;max-width: 500px;position: relative;border: solid 0.1px rgba(146, 145, 145, 0.74);left: -166px;top: -92px;margin: 0 auto;-ms-transform: rotate(15deg);-webkit-transform: rotate(15deg);transform: rotate(15deg);}." +
			NCSS +
			"snes_c1 #" +
			NCSS +
			"dpadl{width: 40px;height: 30px;background-color: aliceblue;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: -3px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"snes_c1 #" +
			NCSS +
			"dpadr{width: 40px;height: 30px;background-color: chartreuse;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 62px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"snes_c1 #" +
			NCSS +
			"dpadu{position:absolute !important;width: 30px;height: 40px;background-color: #5a0000;position:absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 35px;right:0px;top: 3px;bottom: 0px;}." +
			NCSS +
			"snes_c1 #" +
			NCSS +
			"dpadd{width: 30px;height: 40px;background-color: aquamarine;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 35px;right:0px;top: 60px;bottom: 0px;}." +
			NCSS +
			"snes_c1 #" +
			NCSS +
			"ConDpad{border:solid 5px rgba(0,0,0,0.00);width: 98px;height: 100px;max-width: 500px;position: relative;left: -168px;top: 94px;margin: 0 auto;}." +
			NCSS +
			"snes_c1 #" +
			NCSS +
			"ConL1{border: solid 0.1px rgba(146, 145, 145, 0.74);width: 126px;height: 30px;max-width: 500px;position: relative;left: -166px;top: -271px;margin: 0 auto;background: rgba(77,120,160,1.00);}." +
			NCSS +
			"snes_c1 #" +
			NCSS +
			"ConR1{border: solid 0.1px rgba(146, 145, 145, 0.74);width: 126px;height: 30px;max-width: 500px;position: relative;left: 165px;top: -301px;margin: 0 auto;background: rgb(160, 77, 131);}." +
			NCSS +
			"snes_c1 #" +
			NCSS +
			"cui_button1{width: 45px;height: 45px;background-color: #0088ff;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 0px;right:0px;top: 49px;bottom: 0px;}." +
			NCSS +
			"snes_c1 #" +
			NCSS +
			"cui_button2{width: 45px;height: 45px;background-color: #1cff01;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 55px;right:0px;top: 95px;bottom: 0px;}." +
			NCSS +
			"snes_c1 #" +
			NCSS +
			"cui_button3{width: 45px;height: 45px;background-color: rgba(255,0,4,1.00);position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 110px;right:0px;top: 53px;bottom: 0px;}." +
			NCSS +
			"snes_c1 #" +
			NCSS +
			"cui_button4{width: 45px;height: 45px;background-color: rgba(255,221,0,1.00);position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 54px;right:0px;top: 8px;bottom: 0px;}." +
			NCSS +
			"snes_c1 #" +
			NCSS +
			"ConButtons{border:solid 5px rgba(0,0,0,0.00);width: 150px;height: 120px;max-width: 500px;position: relative;left: 164px;top: -36px;margin: 0 auto;}." +
			NCSS +
			"snes_c1 #" +
			NCSS +
			"ConSelect{width: 55px;height: 25px;max-width: 500px;position: relative;border: solid 0.1px rgba(146, 145, 145, 0.74);left: -50px;top: -81px;margin: 0 auto;background: rgba(160, 77, 108, 0.37);-ms-transform: rotate(-38deg);-webkit-transform: rotate(-38deg);transform: rotate(-38deg);}." +
			NCSS +
			"snes_c1 #" +
			NCSS +
			"ConStart{width: 55px;height: 25px;max-width: 500px;position: relative;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 11px;top: -108px;margin: 0 auto;-ms-transform: rotate(-38deg);-webkit-transform: rotate(-38deg);transform: rotate(-38deg);background: rgba(77, 120, 160, 0.31);}." +
			NCSS +
			"atari_jaguar_c1 #" +
			NCSS +
			"dpadl{width: 40px;height: 30px;background-color: aliceblue;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: -4px;right:0px;top: 32px;bottom: 0px;}." +
			NCSS +
			"atari_jaguar_c1 #" +
			NCSS +
			"dpadr{width: 40px;height: 30px;background-color: chartreuse;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 63px;right:0px;top: 32px;bottom: 0px;}." +
			NCSS +
			"atari_jaguar_c1 #" +
			NCSS +
			"dpadu{position:absolute !important;width: 30px;height: 40px;background-color: #5a0000;position:absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 35px;right:0px;top: -6px;bottom: 0px;}." +
			NCSS +
			"atari_jaguar_c1 #" +
			NCSS +
			"dpadd{width: 30px;height: 40px;background-color: aquamarine;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 35px;right:0px;top: 60px;bottom: 0px;}." +
			NCSS +
			"atari_jaguar_c1 #" +
			NCSS +
			"ConDpad{border:solid 5px rgba(0,0,0,0.00);width: 98px;height: 100px;max-width: 500px;position: relative;left: -118px;top: 64px;margin: 0 auto;}." +
			NCSS +
			"atari_jaguar_c1 #" +
			NCSS +
			"ConL1{border: solid 0.1px rgba(146, 145, 145, 0.74);width: 45px;height: 25px;max-width: 500px;position: relative;left: -59px;top: -63px;margin: 0 auto;background: rgba(77,120,160,1.00);}." +
			NCSS +
			"atari_jaguar_c1 #" +
			NCSS +
			"ConR1{border: solid 0.1px rgba(146, 145, 145, 0.74);width: 45px;height: 25px;max-width: 500px;position: relative;left: 60px;top: -88px;margin: 0 auto;background: rgb(160, 77, 131);}." +
			NCSS +
			"atari_jaguar_c1 #" +
			NCSS +
			"cui_button1{width: 45px;height: 45px;background-color: #0088ff;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: -38px;right:0px;top: 59px;bottom: 0px;}." +
			NCSS +
			"atari_jaguar_c1 #" +
			NCSS +
			"cui_button2{width: 45px;height: 45px;background-color: #1cff01;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: -4px;right:0px;top: 18px;bottom: 0px;}." +
			NCSS +
			"atari_jaguar_c1 #" +
			NCSS +
			"cui_button3{width: 45px;height: 45px;background-color: rgba(255,0,4,1.00);position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 30px;right:0px;top: -18px;bottom: 0px;}." +
			NCSS +
			"atari_jaguar_c1 #" +
			NCSS +
			"cui_button4{width: 45px;height: 25px;background-color: rgba(255,221,0,1.00);position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: -110px;right:0px;top: 148px;bottom: 0px;}." +
			NCSS +
			"atari_jaguar_c1 #" +
			NCSS +
			"cui_button5{width: 45px;height: 25px;background-color: rgba(255,221,0,1.00);position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: -169px;right:0px;top: 185px;bottom: 0px;}." +
			NCSS +
			"atari_jaguar_c1 #" +
			NCSS +
			"cui_button6{width: 45px;height: 25px;background-color: rgba(255,221,0,1.00);position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: -110px;right:0px;top: 185px;bottom: 0px;}." +
			NCSS +
			"atari_jaguar_c1 #" +
			NCSS +
			"cui_button7{width: 45px;height: 25px;background-color: rgba(255,221,0,1.00);position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: -52px;right:0px;top: 185px;bottom: 0px;}." +
			NCSS +
			"atari_jaguar_c1 #" +
			NCSS +
			"cui_button8{width: 45px;height: 25px;background-color: rgba(255,221,0,1.00);position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: -169px;right:0px;top: 223px;bottom: 0px;}." +
			NCSS +
			"atari_jaguar_c1 #" +
			NCSS +
			"cui_button9{width: 45px;height: 25px;background-color: rgba(255,221,0,1.00);position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: -110px;right:0px;top: 223px;bottom: 0px;}." +
			NCSS +
			"atari_jaguar_c1 #" +
			NCSS +
			"cui_button10{width: 45px;height: 25px;background-color: rgba(255,221,0,1.00);position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: -52px;right:0px;top: 223px;bottom: 0px;}." +
			NCSS +
			"atari_jaguar_c1 #" +
			NCSS +
			"cui_button11{width: 45px;height: 25px;background-color: rgba(255,221,0,1.00);position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: -169px;right:0px;top: 258px;bottom: 0px;}." +
			NCSS +
			"atari_jaguar_c1 #" +
			NCSS +
			"cui_button12{width: 45px;height: 25px;background-color: rgba(255,221,0,1.00);position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: -110px;right:0px;top: 258px;bottom: 0px;}." +
			NCSS +
			"atari_jaguar_c1 #" +
			NCSS +
			"cui_button13{width: 45px;height: 25px;background-color: rgba(255,221,0,1.00);position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: -52px;right:0px;top: 258px;bottom: 0px;}." +
			NCSS +
			"atari_jaguar_c1 #" +
			NCSS +
			"ConButtons{border:solid 5px rgba(0,0,0,0.00);width: 150px;height: 120px;max-width: 500px;position: relative;left: 164px;top: -36px;margin: 0 auto;}." +
			NCSS +
			"atari_jaguar_c1 #" +
			NCSS +
			"ConSelect{width: 45px;height: 25px;max-width: 500px;position: relative;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 6px;top: -101px;margin: 0 auto;background: rgba(160, 77, 108, 0.37);-ms-transform: rotate(-55deg);-webkit-transform: rotate(-55deg);transform: rotate(-55deg);}." +
			NCSS +
			"atari_jaguar_c1 #" +
			NCSS +
			"ConStart{width: 45px;height: 25px;max-width: 500px;position: relative;border: solid 0.1px rgba(146, 145, 145, 0.74);left: -28px;top: -126px;margin: 0 auto;-ms-transform: rotate(-55deg);-webkit-transform: rotate(-55deg);transform: rotate(-55deg);background: rgba(77, 120, 160, 0.31);}." +
			NCSS +
			"neogeo_c1 #" +
			NCSS +
			"dpadl{width: 40px;height: 30px;background-color: aliceblue;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: -3px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"neogeo_c1 #" +
			NCSS +
			"dpadr{width: 40px;height: 30px;background-color: chartreuse;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 65px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"neogeo_c1 #" +
			NCSS +
			"dpadu{position:absolute !important;width: 30px;height: 40px;background-color: #5a0000;position:absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 36px;right:0px;top: -2px;bottom: 0px;}." +
			NCSS +
			"neogeo_c1 #" +
			NCSS +
			"dpadd{width: 30px;height: 40px;background-color: aquamarine;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 36px;right:0px;top: 66px;bottom: 0px;}." +
			NCSS +
			"neogeo_c1 #" +
			NCSS +
			"ConDpad{border:solid 5px rgba(0,0,0,0.00);width: 98px;height: 100px;max-width: 500px;position: relative;left: -142px;top: 81px;margin: 0 auto;}." +
			NCSS +
			"neogeo_c1 #" +
			NCSS +
			"ConL1{border: solid 0.1px rgba(146, 145, 145, 0.74);width: 126px;height: 30px;max-width: 500px;position: relative;left: -166px;top: -271px;margin: 0 auto;background: rgba(77,120,160,1.00);}." +
			NCSS +
			"neogeo_c1 #" +
			NCSS +
			"ConR1{border: solid 0.1px rgba(146, 145, 145, 0.74);width: 126px;height: 30px;max-width: 500px;position: relative;left: 165px;top: -301px;margin: 0 auto;background: rgb(160, 77, 131);}." +
			NCSS +
			"neogeo_c1 #" +
			NCSS +
			"cui_button1{width: 50px;height: 50px;background-color: #0088ff;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: -9px;right:0px;top: 39px;bottom: 0px;}." +
			NCSS +
			"neogeo_c1 #" +
			NCSS +
			"cui_button2{width: 50px;height: 50px;background-color: #1cff01;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 25px;right:0px;top: 101px;bottom: 0px;}." +
			NCSS +
			"neogeo_c1 #" +
			NCSS +
			"cui_button3{width: 50PX;height: 50px;background-color: rgba(255,0,4,1.00);position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 87px;right:0px;top: 65px;bottom: 0px;}." +
			NCSS +
			"neogeo_c1 #" +
			NCSS +
			"cui_button4{width: 50px;height: 50px;background-color: rgba(255,221,0,1.00);position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 52px;right:0px;top: 4px;bottom: 0px;}." +
			NCSS +
			"neogeo_c1 #" +
			NCSS +
			"ConButtons{border:solid 5px rgba(0,0,0,0.00);width: 150px;height: 120px;max-width: 500px;position: relative;left: 156px;top: -66px;margin: 0 auto;}." +
			NCSS +
			"neogeo_c1 #" +
			NCSS +
			"ConSelect{width: 55px;height: 25px;max-width: 500px;position: relative;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 15px;top: -114px;margin: 0 auto;-ms-transform: rotate(-35deg);-webkit-transform: rotate(-35deg);transform: rotate(-35deg);}." +
			NCSS +
			"neogeo_c1 #" +
			NCSS +
			"ConStart{width: 55px;height: 25px;max-width: 500px;position: relative;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 15px;top: -77px;margin: 0 auto;-ms-transform: rotate(-35deg);-webkit-transform: rotate(-35deg);transform: rotate(-35deg);background: rgba(77, 120, 160, 0.31);}." +
			NCSS +
			"arcade_c1 #" +
			NCSS +
			"dpadl{width: 40px;height: 32px;background-color: aliceblue;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: -3px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"arcade_c1 #" +
			NCSS +
			"dpadr{width: 40px;height: 32px;background-color: chartreuse;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 67px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"arcade_c1 #" +
			NCSS +
			"dpadu{position:absolute !important;width: 32px;height: 40px;background-color: #5a0000;position:absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 36px;right:0px;top: -1px;bottom: 0px;}." +
			NCSS +
			"arcade_c1 #" +
			NCSS +
			"dpadd{width: 32px;height: 40px;background-color: aquamarine;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 36px;right:0px;top: 68px;bottom: 0px;}." +
			NCSS +
			"arcade_c1 #" +
			NCSS +
			"ConDpad{border:solid 5px rgba(0,0,0,0.00);width: 98px;height: 100px;max-width: 500px;position: relative;left: -122px;top: 26px;margin: 0 auto;}." +
			NCSS +
			"arcade_c1 #" +
			NCSS +
			"cui_button1{width: 35px;height: 35px;background-color: #0088ff;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: -12px;right:0px;top: 106px;bottom: 0px;}." +
			NCSS +
			"arcade_c1 #" +
			NCSS +
			"cui_button2{width: 35px;height: 35px;background-color: #1cff01;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 20px;right:0px;top: 71px;bottom: 0px;}." +
			NCSS +
			"arcade_c1 #" +
			NCSS +
			"cui_button3{width: 35px;height: 35px;background-color: rgba(255,0,4,1.00);position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 58px;right:0px;top: 45px;bottom: 0px;}." +
			NCSS +
			"arcade_c1 #" +
			NCSS +
			"cui_button4{width: 35px;height: 35px;background-color: rgba(255,221,0,1.00);position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: -42px;right:0px;top: 26px;bottom: 0px;}." +
			NCSS +
			"arcade_c1 #" +
			NCSS +
			"cui_button5{width: 35px;height: 35px;background-color: rgba(255,118,0,1.00);position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: -70px;right:0px;top: 61px;bottom: 0px;}." +
			NCSS +
			"arcade_c1 #" +
			NCSS +
			"cui_button6{width: 35px;height: 35px;background-color: rgba(215,0,253,1.00);position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: -2px;right:0px;top: 1px;bottom: 0px;}." +
			NCSS +
			"arcade_c1 #" +
			NCSS +
			"ConButtons{border:solid 5px rgba(0,0,0,0.00);width: 150px;height: 120px;max-width: 500px;position: relative;left: 156px;top: -66px;margin: 0 auto;}." +
			NCSS +
			"arcade_c1 #" +
			NCSS +
			"ConSelect{width: 35px;height: 25px;max-width: 500px;position: relative;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 0px;top: -205px;margin: 0 auto;background: rgba(160, 77, 108, 0.37);}." +
			NCSS +
			"arcade_c1 #" +
			NCSS +
			"ConStart{width: 35px;height: 25px;max-width: 500px;position: relative;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 1px;top: -257px;margin: 0 auto;background: rgba(77, 120, 160, 0.31);}." +
			NCSS +
			"nes_c1 #" +
			NCSS +
			"ConStart{width: 55px;height: 25px;max-width: 500px;position: relative;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 8px;top: -88px;margin: 0 auto;background: rgba(77,120,160,1.00);}." +
			NCSS +
			"nes_c1 #" +
			NCSS +
			"ConSelect{width: 55px;height: 25px;max-width: 500px;position: relative;left: -58px;top: -63px;border: solid 0.1px rgba(146, 145, 145, 0.74);margin: 0 auto;background: rgb(160, 77, 108);}." +
			NCSS +
			"nes_c1 #" +
			NCSS +
			"cui_button1{width: 55px;height: 55px;background-color: #0088ff;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 5px;right:0px;top: 45px;bottom: 0px;}." +
			NCSS +
			"nes_c1 #" +
			NCSS +
			"cui_button2{width: 55px;height: 55px;background-color: #1cff01;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 79px;right:0px;top: 45px;bottom: 0px;}." +
			NCSS +
			"nes_c1 #" +
			NCSS +
			"cui_button3{width: 55px;height: 55px;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 5px;right:0px;top: -27px;bottom: 0px;}." +
			NCSS +
			"nes_c1 #" +
			NCSS +
			"cui_button4{width: 55px;height: 55px;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 79px;right:0px;top: -27px;bottom: 0px;}";
		Ncss2 =
			"." +
			NCSS +
			"nes_c1 #" +
			NCSS +
			"dpadl{width: 40px;height: 30px;background-color: aliceblue;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: -1px;right:0px;top: 36px;bottom: 0px;}." +
			NCSS +
			"nes_c1 #" +
			NCSS +
			"dpadr{width: 40px;height: 30px;background-color: chartreuse;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 69px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"nes_c1 #" +
			NCSS +
			"dpadu{position:absolute !important;width: 32px;height: 40px;background-color: #5a0000;position:absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 38px;right:0px;top: -2px;bottom: 0px;}." +
			NCSS +
			"nes_c1 #" +
			NCSS +
			"dpadd{width: 32px;height: 40px;background-color: aquamarine;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 38px;right:0px;top: 65px;bottom: 0px;}." +
			NCSS +
			"nes_c1 #" +
			NCSS +
			"ConDpad{border:solid 5px rgba(0,0,0,0.00);width: 109px;height: 106px;max-width: 500px;position: relative;left: -187px;top: 109px;margin: 0 auto;}." +
			NCSS +
			"nes_c1 #" +
			NCSS +
			"ConButtons{border:solid 5px rgba(0,0,0,0.00);width: 150px;height: 120px;max-width: 500px;position: relative;left: 155px;top: 1px;margin: 0 auto;}." +
			NCSS +
			"atari2600_c1 #" +
			NCSS +
			"cui_button2{width: 65px;height: 65px;background-color: #1cff01;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 75px;right:0px;top: 39px;bottom: 0px;}." +
			NCSS +
			"atari2600_c1 #" +
			NCSS +
			"dpadl{width: 40px;height: 30px;background-color: aliceblue;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: -3px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"atari2600_c1 #" +
			NCSS +
			"dpadr{width: 40px;height: 30px;background-color: chartreuse;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 67px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"atari2600_c1 #" +
			NCSS +
			"dpadu{position:absolute !important;width: 30px;height: 40px;background-color: #5a0000;position:absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 38px;right:0px;top: 0px;bottom: 0px;}." +
			NCSS +
			"atari2600_c1 #" +
			NCSS +
			"dpadd{width: 30px;height: 40px;background-color: aquamarine;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 37px;right:0px;top: 65px;bottom: 0px;}." +
			NCSS +
			"atari2600_c1 #" +
			NCSS +
			"ConDpad{border:solid 5px rgba(0,0,0,0.00);width: 109px;height: 106px;max-width: 500px;position: relative;left: 3px;top: 153px;margin: 0 auto;}." +
			NCSS +
			"atari2600_c1 #" +
			NCSS +
			"ConButtons{border:solid 5px rgba(0,0,0,0.00);width: 150px;height: 120px;max-width: 500px;position: relative;left: -155px;top: -125px;margin: 0 auto;}." +
			NCSS +
			"wswan_c1 #" +
			NCSS +
			"ConStart{width: 35px;height: 25px;max-width: 500px;position: relative;border: solid 0.1px rgba(146, 145, 145, 0.74);left: -32px;top: 6px;margin: 0 auto;background: rgba(77,120,160,1.00);}." +
			NCSS +
			"wswan_c1 #" +
			NCSS +
			"cui_button1{width: 35px;height: 35px;background-color: #0088ff;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 80px;right:0px;top: 95px;bottom: 0px;}." +
			NCSS +
			"wswan_c1 #" +
			NCSS +
			"cui_button2{width: 35px;height: 35px;background-color: #1cff01;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 116px;right:0px;top: 71px;bottom: 0px;}." +
			NCSS +
			"wswan_c1 #" +
			NCSS +
			"dpadl{width: 40px;height: 30px;background-color: aliceblue;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: -3px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"wswan_c1 #" +
			NCSS +
			"dpadr{width: 40px;height: 30px;background-color: chartreuse;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 67px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"wswan_c1 #" +
			NCSS +
			"dpadu{position:absolute !important;width: 30px;height: 40px;background-color: #5a0000;position:absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 38px;right:0px;top: 0px;bottom: 0px;}." +
			NCSS +
			"wswan_c1 #" +
			NCSS +
			"dpadd{width: 30px;height: 40px;background-color: aquamarine;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 37px;right:0px;top: 65px;bottom: 0px;}." +
			NCSS +
			"wswan_c1 #" +
			NCSS +
			"ConDpad{border:solid 5px rgba(0,0,0,0.00);width: 109px;height: 106px;max-width: 500px;position: relative;left: -181px;top: 159px;margin: 0 auto;}." +
			NCSS +
			"wswan_c1 #" +
			NCSS +
			"ConButtons{border:solid 5px rgba(0,0,0,0.00);width: 150px;height: 120px;max-width: 500px;position: relative;left: 155px;top: 1px;margin: 0 auto;}." +
			NCSS +
			"ngp_c1 #" +
			NCSS +
			"ConStart{width: 35px;height: 25px;max-width: 500px;position: relative;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 212px;top: -182px;margin: 0 auto;background: rgba(77,120,160,1.00);}." +
			NCSS +
			"ngp_c1 #" +
			NCSS +
			"cui_button1{width: 45px;height: 45px;background-color: #0088ff;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 56px;right:0px;top: 30px;bottom: 0px;}." +
			NCSS +
			"ngp_c1 #" +
			NCSS +
			"cui_button2{width: 45px;height: 45px;background-color: #1cff01;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 105px;right:0px;top: -5px;bottom: 0px;}." +
			NCSS +
			"ngp_c1 #" +
			NCSS +
			"dpadl{width: 40px;height: 30px;background-color: aliceblue;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: -3px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"ngp_c1 #" +
			NCSS +
			"dpadr{width: 40px;height: 30px;background-color: chartreuse;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 67px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"ngp_c1 #" +
			NCSS +
			"dpadu{position:absolute !important;width: 30px;height: 40px;background-color: #5a0000;position:absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 38px;right:0px;top: 0px;bottom: 0px;}." +
			NCSS +
			"ngp_c1 #" +
			NCSS +
			"dpadd{width: 30px;height: 40px;background-color: aquamarine;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 37px;right:0px;top: 65px;bottom: 0px;}." +
			NCSS +
			"ngp_c1 #" +
			NCSS +
			"ConDpad{border:solid 5px rgba(0,0,0,0.00);width: 109px;height: 106px;max-width: 500px;position: relative;left: -172px;top: 99px;margin: 0 auto;}." +
			NCSS +
			"ngp_c1 #" +
			NCSS +
			"ConButtons{border:solid 5px rgba(0,0,0,0.00);width: 150px;height: 120px;max-width: 500px;position: relative;left: 155px;top: 1px;margin: 0 auto;}." +
			NCSS +
			"segaMS_c1 #" +
			NCSS +
			"cui_button1{width: 55px;height: 55px;background-color: #0088ff;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 5px;right:0px;top: 30px;bottom: 0px;}." +
			NCSS +
			"segaMS_c1 #" +
			NCSS +
			"cui_button2{width: 55px;height: 55px;background-color: #1cff01;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 102px;right:0px;top: 30px;bottom: 0px;}." +
			NCSS +
			"segaMS_c1 #" +
			NCSS +
			"dpadl{width: 40px;height: 30px;background-color: aliceblue;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: -3px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"segaMS_c1 #" +
			NCSS +
			"dpadr{width: 40px;height: 30px;background-color: chartreuse;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 67px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"segaMS_c1 #" +
			NCSS +
			"dpadu{position:absolute !important;width: 32px;height: 40px;background-color: #5a0000;position:absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 36px;right:0px;top: -2px;bottom: 0px;}." +
			NCSS +
			"segaMS_c1 #" +
			NCSS +
			"dpadd{width: 32px;height: 40px;background-color: aquamarine;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 36px;right:0px;top: 66px;bottom: 0px;}." +
			NCSS +
			"segaMS_c1 #" +
			NCSS +
			"ConDpad{border:solid 5px rgba(0,0,0,0.00);width: 109px;height: 106px;max-width: 500px;position: relative;left: -138px;top: 92px;margin: 0 auto;}." +
			NCSS +
			"segaMS_c1 #" +
			NCSS +
			"ConButtons{border:solid 5px rgba(0,0,0,0.00);width: 150px;height: 120px;max-width: 500px;position: relative;left: 155px;top: 1px;margin: 0 auto;}." +
			NCSS +
			"gboy_c1 #" +
			NCSS +
			"ConStart{width: 45px;height: 15px;max-width: 500px;position: relative;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 5px;top: 47px;margin: 0 auto;background: rgba(77,120,160,1.00);-ms-transform: rotate(-28deg);-webkit-transform: rotate(-28deg);transform: rotate(-28deg);}." +
			NCSS +
			"segaGG_c1 #" +
			NCSS +
			"cui_button1{width: 35px;height: 35px;background-color: #0088ff;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 94px;right:0px;top: -5px;bottom: 0px;}." +
			NCSS +
			"segaGG_c1 #" +
			NCSS +
			"cui_button2{width: 35px;height: 35px;background-color: #1cff01;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 132px;right:0px;top: -36px;bottom: 0px;}." +
			NCSS +
			"segaGG_c1 #" +
			NCSS +
			"dpadl{width: 40px;height: 30px;background-color: aliceblue;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: -3px;right:0px;top: 34px;bottom: 0px;}." +
			NCSS +
			"segaGG_c1 #" +
			NCSS +
			"dpadr{width: 40px;height: 30px;background-color: chartreuse;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 67px;right:0px;top: 34px;bottom: 0px;}." +
			NCSS +
			"segaGG_c1 #" +
			NCSS +
			"dpadu{position:absolute !important;width: 32px;height: 40px;background-color: #5a0000;position:absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 36px;right:0px;top: -5px;bottom: 0px;}." +
			NCSS +
			"segaGG_c1 #" +
			NCSS +
			"dpadd{width: 32px;height: 40px;background-color: aquamarine;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 36px;right:0px;top: 63px;bottom: 0px;}." +
			NCSS +
			"segaGG_c1 #" +
			NCSS +
			"ConDpad{border:solid 5px rgba(0,0,0,0.00);width: 109px;height: 106px;max-width: 500px;position: relative;left: -207px;top: 59px;margin: 0 auto;}." +
			NCSS +
			"segaGG_c1 #" +
			NCSS +
			"ConButtons{border:solid 5px rgba(0,0,0,0.00);width: 150px;height: 120px;max-width: 500px;position: relative;left: 155px;top: 1px;margin: 0 auto;}." +
			NCSS +
			"segaGG_c1 #" +
			NCSS +
			"ConStart{width: 35px;height: 35px;max-width: 500px;position: relative;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 192px;top: -201px;margin: 0 auto;background: rgba(77,120,160,1.00);}." +
			NCSS +
			"lynx_c1 #" +
			NCSS +
			"cui_button1{width: 35px;height: 35px;background-color: #0088ff;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 118px;right:0px;top: -76px;bottom: 0px;}." +
			NCSS +
			"lynx_c1 #" +
			NCSS +
			"cui_button2{width: 35px;height: 35px;background-color: #1cff01;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 160px;right:0px;top: -80px;bottom: 0px;}." +
			NCSS +
			"lynx_c1 #" +
			NCSS +
			"dpadl{width: 40px;height: 30px;background-color: aliceblue;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: -3px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"lynx_c1 #" +
			NCSS +
			"dpadr{width: 40px;height: 30px;background-color: chartreuse;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 67px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"lynx_c1 #" +
			NCSS +
			"dpadu{position:absolute !important;width: 30px;height: 40px;background-color: #5a0000;position:absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 38px;right:0px;top: 0px;bottom: 0px;}." +
			NCSS +
			"lynx_c1 #" +
			NCSS +
			"dpadd{width: 30px;height: 40px;background-color: aquamarine;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 37px;right:0px;top: 65px;bottom: 0px;}." +
			NCSS +
			"lynx_c1 #" +
			NCSS +
			"ConDpad{border:solid 5px rgba(0,0,0,0.00);width: 109px;height: 106px;max-width: 500px;position: relative;left: -197px;top: 79px;margin: 0 auto;}." +
			NCSS +
			"lynx_c1 #" +
			NCSS +
			"ConButtons{border: solid 5px rgba(255, 255, 255, 0);width: 150px;height: 120px;max-width: 500px;position: relative;left: 155px;top: 1px;margin: 0 auto;}." +
			NCSS +
			"lynx_c1 #" +
			NCSS +
			"ConStart{width: 35px;height: 25px;max-width: 500px;position: relative;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 168px;top: -178px;margin: 0 auto;background: rgba(77,120,160,1.00);}." +
			NCSS +
			"lynx_c1 #" +
			NCSS +
			"ConSelect{width: 35px;height: 25px;max-width: 500px;position: relative;left: 168px;top: -87px;border: solid 0.1px rgba(146, 145, 145, 0.74);margin: 0 auto;background: rgb(160, 77, 108);}." +
			NCSS +
			"gboy_c1 #" +
			NCSS +
			"ConSelect{width: 45px;height: 15px;max-width: 500px;position: relative;left: -33px;top: 62px;border: solid 0.1px rgba(146, 145, 145, 0.74);margin: 0 auto;background: rgb(160, 77, 108);-ms-transform: rotate(-28deg); -webkit-transform: rotate(-28deg); transform: rotate(-28deg);}." +
			NCSS +
			"gboy_c1 #" +
			NCSS +
			"cui_button1{width: 35px;height: 35px;background-color: #0088ff;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 32px;right:0px;top: 55px;bottom: 0px;}." +
			NCSS +
			"gboy_c1 #" +
			NCSS +
			"cui_button2{width: 35px;height: 35px;background-color: #1cff01;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 69px;right:0px;top: 40px;bottom: 0px;}." +
			NCSS +
			"gboy_c1 #" +
			NCSS +
			"dpadl{width: 30px;height: 20px;background-color: aliceblue;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 18px;right:0px;top: 41px;bottom: 0px;}." +
			NCSS +
			"gboy_c1 #" +
			NCSS +
			"dpadr{width: 30px;height: 20px;background-color: chartreuse;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 59px;right:0px;top: 41px;bottom: 0px;}." +
			NCSS +
			"gboy_c1 #" +
			NCSS +
			"dpadu{position:absolute !important;width: 20px;height: 30px;background-color: #5a0000;position:absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 44px;right:0px;top: 16px;bottom: 0px;}." +
			NCSS +
			"gboy_c1 #" +
			NCSS +
			"dpadd{width: 20px;height: 30px;background-color: aquamarine;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 44px;right:0px;top: 56px;bottom: 0px;}." +
			NCSS +
			"gboy_c1 #" +
			NCSS +
			"ConDpad{border:solid 5px rgba(0,0,0,0.00);width: 109px;height: 106px;max-width: 500px;position: relative;left: -67px;top: 205px;margin: 0 auto;}." +
			NCSS +
			"gboy_c1 #" +
			NCSS +
			"ConButtons{border:solid 5px rgba(0,0,0,0.00);width: 150px;height: 120px;max-width: 500px;position: relative;left: 70px;top: 71px;margin: 0 auto;}." +
			NCSS +
			"atari7800_c1 #" +
			NCSS +
			"cui_button1{width: 70px;height: 70px;background-color: #0088ff;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 5px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"atari7800_c1 #" +
			NCSS +
			"cui_button2{width: 70px;height: 70px;background-color: #1cff01;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 125px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"atari7800_c1 #" +
			NCSS +
			"dpadl{width: 40px;height: 30px;background-color: aliceblue;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: -3px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"atari7800_c1 #" +
			NCSS +
			"dpadr{width: 40px;height: 30px;background-color: chartreuse;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 67px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"atari7800_c1 #" +
			NCSS +
			"dpadu{position:absolute !important;width: 30px;height: 40px;background-color: #5a0000;position:absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 38px;right:0px;top: 0px;bottom: 0px;}." +
			NCSS +
			"atari7800_c1 #" +
			NCSS +
			"dpadd{width: 30px;height: 40px;background-color: aquamarine;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 37px;right:0px;top: 65px;bottom: 0px;}." +
			NCSS +
			"atari7800_c1 #" +
			NCSS +
			"ConDpad{border:solid 5px rgba(0,0,0,0.00);width: 109px;height: 106px;max-width: 500px;position: relative;left: -159px;top: 33px;margin: 0 auto;}." +
			NCSS +
			"atari7800_c1 #" +
			NCSS +
			"ConButtons{border:solid 5px rgba(0,0,0,0.00);width: 200px;height: 120px;max-width: 500px;position: relative;left: 82px;top: 15px;margin: 0 auto;}." +
			NCSS +
			"tg16_c1 #" +
			NCSS +
			"ConStart{width: 55px;height: 25px;max-width: 500px;position: relative;left: 33px;top: -56px;margin: 0 auto;border: solid 0.1px rgba(146, 145, 145, 0.74);background: rgba(77,120,160,1.00);}." +
			NCSS +
			"tg16_c1 #" +
			NCSS +
			"ConSelect{width: 55px;height: 25px;max-width: 500px;position: relative;left: -38px;top: -31px;border: solid 0.1px rgba(146, 145, 145, 0.74);margin: 0 auto;background: rgb(160, 77, 108);}." +
			NCSS +
			"tg16_c1 #" +
			NCSS +
			"cui_button1{width: 55px;height: 55px;background-color: #0088ff;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 5px;right:0px;top: 45px;bottom: 0px;}." +
			NCSS +
			"tg16_c1 #" +
			NCSS +
			"cui_button2{width: 55px;height: 55px;background-color: #1cff01;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 79px;right:0px;top: 45px;bottom: 0px;}." +
			NCSS +
			"tg16_c1 #" +
			NCSS +
			"dpadl{width: 40px;height: 30px;background-color: aliceblue;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: -2px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"tg16_c1 #" +
			NCSS +
			"dpadr{width: 40px;height: 30px;background-color: chartreuse;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 67px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"tg16_c1 #" +
			NCSS +
			"dpadu{position:absolute !important;width: 31px;height: 40px;position: relative;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 37px;right:0px;top: -2px;bottom: 0px;}." +
			NCSS +
			"tg16_c1 #" +
			NCSS +
			"dpadd{width: 30px;height: 40px;background-color: aquamarine;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 37px;right:0px;top: 66px;bottom: 0px;}." +
			NCSS +
			"tg16_c1 #" +
			NCSS +
			"ConDpad{border:solid 5px rgba(0,0,0,0.00);width: 109px;height: 106px;max-width: 500px;position: relative;left: -207px;top: 150px;margin: 0 auto;}." +
			NCSS +
			"tg16_c1 #" +
			NCSS +
			"ConButtons{border:solid 5px rgba(0,0,0,0.00);width: 150px;height: 120px;max-width: 500px;position: relative;left: 182px;top: 34px;margin: 0 auto;}." +
			NCSS +
			"tg16_c1 #" +
			NCSS +
			"cui_button3{width: 25px;height: 50px;background-color: rgba(108,0,244,1.00);position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 23px;right:0px;top: -59px;bottom: 0px;}." +
			NCSS +
			"tg16_c1 #" +
			NCSS +
			"cui_button4{width: 25px;height: 50px;background-color: rgba(0,255,203,1.00);position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 91px;right:0px;top: -59px;bottom: 0px;}." +
			NCSS +
			"d3do_c1 #" +
			NCSS +
			"ConSelect{width: 30px;height: 30px;max-width: 500px;position: relative;left: -30px;top: -41px;border: solid 0.1px rgba(146, 145, 145, 0.74);margin: 0 auto;background: rgb(160, 77, 108);}." +
			NCSS +
			"d3do_c1 #" +
			NCSS +
			"cui_button1{width: 52px;height: 52px;background-color: #0088ff;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 24px;right:0px;top: 55px;bottom: 0px;}." +
			NCSS +
			"d3do_c1 #" +
			NCSS +
			"cui_button2{width: 52px;height: 52px;background-color: #1cff01;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 80px;right:0px;top: 25px;bottom: 0px;}." +
			NCSS +
			"d3do_c1 #" +
			NCSS +
			"cui_button3{width: 52px;height: 52px;background-color: rgba(111,0,251,1.00);position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 140px;right:0px;top: 16px;bottom: 0px;}." +
			NCSS +
			"d3do_c1 #" +
			NCSS +
			"dpadl{width: 40px;height: 30px;background-color: aliceblue;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: -5px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"d3do_c1 #" +
			NCSS +
			"dpadr{width: 40px;height: 30px;background-color: chartreuse;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 62px;right:0px;top: 37px;bottom: 0px;}." +
			NCSS +
			"d3do_c1 #" +
			NCSS +
			"dpadu{position:absolute !important;width: 30px;height: 40px;background-color: #5a0000;position:absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 34px;right:0px;top: 0px;bottom: 0px;}." +
			NCSS +
			"d3do_c1 #" +
			NCSS +
			"dpadd{width: 30px;height: 40px;background-color: aquamarine;position: absolute;border: solid 0.1px rgba(146, 145, 145, 0.74);left: 35px;right:0px;top: 61px;bottom: 0px;}." +
			NCSS +
			"d3do_c1 #" +
			NCSS +
			"ConDpad{border:solid 5px rgba(0,0,0,0.00);width: 96px;height: 100px;max-width: 500px;position: relative;left: -169px;top: 97px;margin: 0 auto;}." +
			NCSS +
			"d3do_c1 #" +
			NCSS +
			"ConButtons{border:solid 5px rgba(0,0,0,0.00);width: 210px;height: 120px;max-width: 500px;position: relative;left: 181px;top: -22px;margin: 0 auto;}." +
			NCSS +
			"d3do_c1 #" +
			NCSS +
			"ConStart{width: 30px;height: 30px;max-width: 500px;position: relative;left: 33px;border: solid 0.1px rgba(146, 145, 145, 0.74);top: -71px;margin: 0 auto;background: rgb(160, 77, 108);}." +
			NCSS +
			"d3do_c1 #" +
			NCSS +
			"ConL1{border: solid 0.1px rgba(146, 145, 145, 0.74);width: 110px;height: 40px;max-width: 500px;position: relative;left: -132px;top: -278px;margin: 0 auto;background: rgba(77, 120, 160, 0.29);}." +
			NCSS +
			"d3do_c1 #" +
			NCSS +
			"ConR1{border: solid 0.1px rgba(146, 145, 145, 0.74);width: 110px;height: 40px;max-width: 500px;position: relative;left: 138px; font-family: 'Montserrat',Helvetica,Roboto,Arial,sans-serif !important;top: -318px;margin: 0 auto;background: rgba(160, 77, 131, 0.5);}." +
			NCSS +
			"button{display: inline-block;text-align: center;line-height: 1;cursor: pointer;-webkit-appearance: none;transition: background-color 0.25s ease-out,color 0.25s ease-out;vertical-align: middle;border: 1px solid transparent;border-radius: 0;padding: 6px 16px;margin: 5px;font-size: 14px !important;background-color: #444;color: #fff;}." +
			NCSS +
			"popup ." +
			NCSS +
			"button{padding: 28px 0px; margin: 5px; font-size: 14px !important; width: 95%;}." +
			NCSS +
			"luib span{float: left;margin-left: 2px;}." +
			NCSS +
			"info{border: solid 1px #353535;font-weight: bold;text-transform: uppercase;}." +
			NCSS +
			"gpadC{display:none;background: #1f1f1f7a;overflow: hidden;padding-top: 4px;padding-bottom: 4px;margin-top: 5px;float: left;width: 100%;max-width: 343px;}." +
			NCSS +
			"gpadC{text-align:center;font-size: 14px !important;}." +
			NCSS +
			"button ." +
			NCSS +
			"primary{background-color: " +
			NepColor +
			";color: #fff;}." +
			NCSS +
			"infopanel{max-width: 450px;position: relative;display: flex;margin: 0 auto  !important;max-height: 310px;}." +
			NCSS +
			"advance_settings{padding: 0.9em 0em !important;width: 100% !important;margin: 0 !important;}." +
			NCSS +
			"button ." +
			NCSS +
			"secondary{color: #fff;}." +
			NCSS +
			"is-active{background: " +
			NepColor +
			";}." +
			NCSS +
			"nepUIb{margin: 0 auto;}." +
			NCSS +
			"medium-5{min-width: 500px;max-width: 500px;margin: 0 auto;margin-top: 5px;}." +
			NCSS +
			"medium-5 ." +
			NCSS +
			"medium-9{width: 27%;float:left;max-width: 294px;}." +
			NCSS +
			"medium-5 ." +
			NCSS +
			"medium-3{width: 10%; float:left;max-width:100px;}." +
			NCSS +
			"nLable{color: #dedede;width: 100%;text-align: center;font-size: 1em;padding: 2px;margin-bottom: 15px;border-bottom: rgba(255, 255, 255, 0.72) solid 1px;font-weight: 600;}." +
			NCSS +
			"gamepadStateInfo{float: left;width: 242px;margin: 2px;text-align: center;font-size: 11px;background: #1f1f1f;padding: 2px;position: relative;}#" +
			NCSS +
			"nepsettings{display:none}." +
			NCSS +
			"select{position: relative;display: inline-block;width: 100px;float: right;margin-bottom: 1px;}." +
			NCSS +
			"select select{line-height: 24px !important;font-family: PT Sans, sans-serif !important;font-size: 14px !important; display: inline-block !important;width: 100% !important;padding: 7px 10px !important;cursor: pointer;color: #7b7b7b !important;float: right;border: 0 !important;border-radius: 0 !important;outline: 0 !important;background: #1f1f1fba !important;appearance: none;-webkit-appearance: none;-moz-appearance: none;}." +
			NCSS +
			"select select::-ms-expand{display: none;}." +
			NCSS +
			"select select:hover,." +
			NCSS +
			"select select:focus{color: #121212;background: #a5a5a5;}." +
			NCSS +
			"select select:disabled{pointer-events: none;opacity: .5;}." +
			NCSS +
			"select__arrow{position: absolute;top: 16px;right: 15px;width: 0;height: 0;pointer-events: none;border-width: 8px 5px 0 5px;border-style: solid;border-color: #7b7b7b transparent transparent transparent;}." +
			NCSS +
			"select select:hover ~ .select__arrow,." +
			NCSS +
			"select select:focus ~ .select__arrow{border-top-color: #000;}." +
			NCSS +
			"select select:disabled ~ .select__arrow{border-top-color: #ccc;}." +
			NCSS +
			"-lablemenuLT." +
			NCSS +
			"checkbox{vertical-align: top; margin: 0 3px 0 0; width: 17px; height: 17px;}." +
			NCSS +
			"checkbox + label:hover{color: #ffffff !important;}." +
			NCSS +
			"checkbox + label{font-size: 14px !important; color: #777777; font-weight: 400 !important; font-family: Verdana, Geneva, sans-serif !important; cursor: pointer !important;}." +
			NCSS +
			"checkbox:not(checked){position: absolute; opacity: 0;}." +
			NCSS +
			"checkbox:not(checked) + label{position: relative !important; padding: 0px 0px 0px 80px !important;}." +
			NCSS +
			"checkbox:not(checked) + label:before{content: ''; position: absolute; top: 4px; left: 5px; width: 40px; height: 16px; border-radius: 13px; background: #CDD1DA; box-shadow: inset 0 2px 3px rgba(0,0,0,.2);}." +
			NCSS +
			"checkbox:not(checked) + label:after{content: ''; position: absolute; top: 6px; left: 8px; width: 16px; height: 12px; border-radius: 10px; background: #FFF; box-shadow: 0 2px 5px rgba(0,0,0,.3); transition: all .2s;}." +
			NCSS +
			"checkbox:checked + label:before{background: " +
			NepColor +
			";}." +
			NCSS +
			"checkbox:checked + label:after{left: 26px;}." +
			NCSS +
			"-lablemenuBT{font-size: 14px; color: #b1b1b1; font-weight: 400; text-align: center; background: #6d6d6d61; padding: 8px; font-family: Verdana, Geneva, sans-serif !important; cursor: pointer;}." +
			NCSS +
			"slider{-webkit-appearance: none; width: 100% !important; height: 15px !important; margin:0px !important; position:relative !important; padding:0px !important; float:none !important; border-radius: 5px !important; background: #d3d3d3 !important; outline: none; opacity: 0.7 !important; -webkit-transition: .2s !important; transition: opacity .2s !important;}." +
			NCSS +
			"slider::-webkit-slider-thumb{-webkit-appearance: none; appearance: none; width: 12.5px; height: 12.5px; border-radius: 50%; background: " +
			NepColor +
			"; cursor: pointer;}." +
			NCSS +
			"slider::-moz-range-thumb{width: 12.5px; height: 12.5px; border-radius: 50%; background: " +
			NepColor +
			"; cursor: pointer;}." +
			NCSS +
			"slider:hover{opacity: 1;}." +
			NCSS +
			"-lablemenuOP{font-size: 14px; color: #b1b1b1; font-weight: 400; text-align: center; float: left; padding: 6px; font-family: Verdana, Geneva, sans-serif !important;}." +
			NCSS +
			NCSS +
			"2{max-width: 100% !important; z-index: 3 !important; position: relative !important; top: 14% !important; width: 300px !important; height: 250px !important; display: flex; margin: 0 auto !important; border: none !important; background: none !important; overflow: hidden !important;}#" +
			NCSS +
			"NJSerror{background: url(https://mem.neptunjs.com/njs/img/error.gif) center no-repeat;width: 100%;height: 100%;background-size: cover;}#" +
			NCSS +
			"status{display: none}#addivwrapper_0{z-index: 10}." +
			NCSS +
			"game-load{font-size: 14px !important; color: #ababab !important;}#" +
			NCSS +
			"EmuBlock h2{line-height: 17px !important;}#" +
			NCSS +
			"EmuBlock div{outline: 0;}#" +
			NCSS +
			"EmuBlock canvas{outline: 0;}.vjs-big-play-button{display: none !important}.vjs-caption-settings{display: none}#" +
			NCSS +
			"SkipAD{display: none}#" +
			NCSS +
			"SkipADS{display: none}.vjs-control-bar{display: none !important}.displayBlock{top: 0px; left: 0px; display: block !important; z-index: 999999 !important; position: absolute;}.video-js{background-color: #000; position: relative; padding: 0; font-size: 10px; vertical-align: middle; display: table-cell; font-weight: 400; font-style: normal; font-family: Arial, sans-serif; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none}.vjs-label-hidden{display: none!important}.vjs-default-skin div.vjs-ads-label{font-size: 13px; line-height: 30px; font-weight: 400; text-align: center; color: white; display: none; width: auto; padding-left: 10px}.vjs-ad-playing .vjs-control.vjs-ads-label{display: block}.vjs-black-poster{position: absolute; top: 0; right: 0; bottom: 0; left: 0; margin: 0; padding: 0; background-repeat: no-repeat; background-position: 50% 50%; background-size: contain; cursor: pointer; background-color: #000}.vjs-has-started .vjs-black-poster.vjs-hidden{display: none}.vjs-using-native-controls .vjs-black-poster{display: none}div.VPAID-container{position: absolute; top: 0; left: 0; width: 100%; height: 100%}div.vjs-vpaid-ad div.vjs-progress-control,div.vjs-vpaid-ad div.vjs-time-controls,div.vjs-vpaid-ad div.vjs-time-divider{display: none}div.vjs-vpaid-ad.vjs-vpaid-flash-ad div.VPAID-container{background-color: #000}div.vjs-vpaid-ad .vjs-tech{z-index: 0}.vjs-ad-playing .vjs-progress-control{pointer-events: none}.vjs-ad-playing .vjs-play-control.vjs-paused,.vjs-ad-playing .vjs-volume-level,.vjs-ad-playing .vjs-play-progress{background-color: #ffe400!important}div." +
			NCSS +
			"svast-skip-button{display: block; position: absolute; bottom: 20%; right: 0; background-color: #000; color: white; font-size: 15px; font-weight: 700; width: auto; padding: 8px; z-index: 2; border: 1px solid white; border-right: none}." +
			NCSS +
			"svast-skip-button.enabled{cursor: pointer; color: #fff}." +
			NCSS +
			"svast-skip-button.enabled:hover{cursor: pointer; background: #333}.vast-blocker{display: block; position: absolute; margin: 0; padding: 0; height: 100%; width: 100%; top: 0; left: 0; right: 0; bottom: 0}." +
			NCSS +
			"svast-skip-button.enabled:after{content: '>>'; position: relative; top: 1px; margin-left: 8px}.vjs-ad-playing.vjs-vast-ad-loading .vjs-loading-spinner{display: block; z-index: 10; -webkit-animation: spin 1.5s infinite linear; -moz-animation: spin 1.5s infinite linear; -o-animation: spin 1.5s infinite linear; animation: spin 1.5s infinite linear}.vjs-vast-ad-loading div.vjs-big-play-button{display: none!important}.vjs-ad-playing .vjs-slider-handle:before{display: none}.vjs-ad-playing .vjs-live-controls{display: none}#" +
			NCSS +
			NCSS +
			NCSS +
			NCSS +
			NCSS +
			NCSS +
			"{width: 100% !important; height: 100% !important}#" +
			NCSS +
			NCSS +
			NCSS +
			NCSS +
			NCSS +
			NCSS +
			"_html5_api{position: absolute; top: 0; left: 0; width: 100%; height: 100%}#" +
			NCSS +
			"vast-video{}.nepVprs-control-bar{display: none !important}#" +
			NCSS +
			"EmuBlock p{font-family: 'PT Sans', sans-serif !important;}#" +
			NCSS +
			"EmuBlock h2{border-radius: 0 0 0 0 !important;};#" +
			NCSS +
			"EmuBlock .picker-handle{display: none!important}#" +
			NCSS +
			"EmuBlock .picker{cursor: none !important; position: relative !important; padding: 0px !important; display: block !important; vertical-align: top;}#" +
			NCSS +
			"EmuBlock label{color:#fff; margin: 0px !important; font-weight: 700; display: block !important; line-height: 1.8em !important;}." +
			NCSS +
			"emul-pause .nep-icon-pause2{color: " +
			NepColor +
			"}." +
			NCSS +
			"game-info{height:100%}progress{background: " +
			NepColor +
			"}." +
			NCSS +
			"nep_deco{background: " +
			NepColor +
			"}." +
			NCSS +
			"loader_emu{color: " +
			NepColor +
			"}." +
			NCSS +
			"help h2{background: " +
			NepColor +
			"}@keyframes pulse{0%{background: #171717}100%{background: " +
			NepColor +
			"}}." +
			NCSS +
			"the-icons{color:#ffffff;}." +
			NCSS +
			"the-icons:hover{color: " +
			NepColor +
			" !important;}." +
			NCSS +
			"emul-sheders." +
			NCSS +
			"menu-span:hover,." +
			NCSS +
			"emul-sheders ul." +
			NCSS +
			"sub-menu:hover{background-color: " +
			NepColor +
			" !important}." +
			NCSS +
			"neptun_settings li:hover{background: " +
			NepColor +
			"}." +
			NCSS +
			"NeptunContextMenu ul li:hover{background: #3e3e3eab; color: #ffff;}#" +
			NCSS +
			"EmuBlock{max-height: " +
			NepMaxHeight +
			"; max-width: " +
			NepMaxWidth +
			";}." +
			NCSS +
			"controll-info h2{padding: 3px !important; border: 0px !important; color: #1f1f1f !important; background: " +
			NepColor +
			";}." +
			NCSS +
			"controll-pause-help h2{background: " +
			NepColor +
			";}." +
			NCSS +
			"NepLabel{display: block !important; padding: 0px !important; line-height: 0px !important; position: relative !important;}." +
			NCSS +
			"emul-pause .nep-icon-pause2{font-size: 40px; text-align: center; margin: 1px auto 0; width: 100%; top: 50%;}." +
			NCSS +
			"nep_deco{float: left; width: 5px; height: 100%;}." +
			NCSS +
			"loader_emu{background-color: #171717; font-size: 23px; height: 43px; margin: 0 auto; padding-left: 3px; padding-right: 3px}." +
			NCSS +
			"help h2{border: 0px !important; color: #1f1f1f !important; padding: 5px !important; font-weight: bold; margin: 0; font-family: Verdana, Geneva, sans-serif; font-size: 27px; min-height: 25px;}." +
			NCSS +
			"emul-display{width: 100%; margin: 0 auto; min-height: 500px; max-height: 720px;}." +
			NCSS +
			"the-icons{cursor: pointer; font-size: 26px!important; line-height: 24px!important; float: left; min-width: 42px; position: relative; padding: 12px 2px 12px 2px; bottom: 0px; top: 50px;}#" +
			NCSS +
			"EmuBlock{position: relative; width: 100%; min-width: 500px; height: 100%; overflow: hidden; clear: both; margin: 0 auto;}." +
			NCSS +
			"controll-info h2{font-weight: bold; margin: 0; font-family: Verdana, Geneva, sans-serif !important; font-size: 18px;}." +
			NCSS +
			"neptun_settings li:hover{-webkit-transition: all .2s ease-in-out; -moz-transition: all .2s ease-in-out; -o-transition: all .2s ease-in-out; -ms-transition: all .2s ease-in-out; transition: all .2s ease-in-out}." +
			NCSS +
			"controll-info{color: #8e8e8e; background: rgba(0, 0, 0, .68); z-index: 4; display: none; top: 0; width: 100%; position: absolute; max-height: 720px; min-height: 500px; font-family: 'Montserrat',Helvetica,Roboto,Arial,sans-serif; font-weight: normal; line-height: 1.5; -webkit-font-smoothing: antialiased;}." +
			NCSS +
			"controll-pause-help h2{padding: 3px !important; font-weight: bold !important; margin: 0; color: #1F1F1F; font-family: Verdana, Geneva, sans-serif !important; font-size: 18px; text-align: center;}#" +
			NCSS +
			"timer_inp{position: absolute; top: 45%; font-size: 55px; color: " +
			NepColor +
			"; left: 0; right: 0; text-align: center; width: 100%; margin: 0 auto;}." +
			NCSS +
			"vast-blocker{display: block; position: absolute; margin: 0; padding: 0; height: 100%; width: 100%; top: 0; left: 0; right: 0; bottom: 0;}.vast-skip-button.enabled{cursor: pointer; color: #fff;}." +
			NCSS +
			"nepVprs-tech{width: 100%; margin: 0 auto; position: relative; background: rgb(0, 0, 0); height: 100%;}." +
			NCSS +
			"vast-skip-button{display: block; position: absolute; top: 5px; right: 0; width: auto; background-color: #000000; z-index: 999999999999 !important; cursor: pointer; color: #fff; font-size: 16px; font-style: italic; line-height: 16px; padding: 10px; z-index: 2;}." +
			NCSS +
			"show-video{position: absolute; z-index: 99999999; width: 100%!important; height: 100%!important}." +
			NCSS +
			"controll-pause-help{font-family: 'Montserrat',Helvetica,Roboto,Arial,sans-serif; font-weight: normal; line-height: 1.5; color: #8e8e8e; -webkit-font-smoothing: antialiased;}." +
			NCSS +
			"nep_info_game p{padding-top: 0px!important; padding-left: 20px!important; margin: 20px 5px 0px 0px !important; float: left; position: relative;}.display-max{min-height: 43vw!important; height: 100%; max-height: 1000px; min-width: 100%!important}." +
			NCSS +
			"ie{width: 100%; position: absolute; margin: 0 auto; font-size: 19pt; top: 20%; font-family: sans-serif; text-align: center; color: white}." +
			NCSS +
			"opera{background: url(https://mem.neptunjs.xyz/neptun/img/UI/opera.png) no-repeat; background-size: 95%; background-position-x: 5px}." +
			NCSS +
			"moz{background: url(https://mem.neptunjs.xyz/neptun/img/UI/moz.png) no-repeat; background-size: 100%}." +
			NCSS +
			"help ." +
			NCSS +
			"note{display: none}." +
			NCSS +
			"selLang{color: #fff; font-size: .75em; letter-spacing: 2px; width: 240px; cursor: pointer; display: block; margin: 0 auto; border: 0; position: relative; bottom: 15px; z-index: 5; display: none}." +
			NCSS +
			"selLang ." +
			NCSS +
			"emul-sheders:hover{height: 168px}#" +
			NCSS +
			"UPload{display: none}." +
			NCSS +
			"helpGpad{top: -99px}." +
			NCSS +
			"note p{margin: 4px}." +
			NCSS +
			"emu-but label{cursor: pointer!important}." +
			NCSS +
			"low_con_gpad{height: 88px!important; bottom: 70px!important; left: 0; right: 0}." +
			NCSS +
			"low_con{height: 94px!important; left: 0; right: 0}." +
			NCSS +
			"controlsImg{max-width: 710px !important; width: 100%; height: 65%; position: relative; top: 5px; margin: 0 auto; background-size: 80% !important;}." +
			NCSS +
			"player_bg_full ." +
			NCSS +
			"active_info{left: -74px!important; display: block}." +
			NCSS +
			"active_info{left: 0px!important; display: block}." +
			NCSS +
			"infoError{position: absolute;margin: 0 auto;width: 100%;color: #e2e2e2;padding: 8px;font-family: Verdana, Geneva, sans-serif !important;text-align: center;font-size: 25px;font-weight: 800;background: #000000;}." +
			NCSS +
			"emu-block." +
			NCSS +
			"activeBR";
		Ncss3 =
			"#" +
			NCSS +
			"infoCC{position: relative;width: 100%;float: left;}#" +
			NCSS +
			"infoCC ." +
			NCSS +
			"gamepadStateInfo{top:0px !important;}." +
			NCSS +
			"emu-ctr-bar{bottom: 0}." +
			NCSS +
			"activeBR{cursor: default!important; bottom: 0!important}#" +
			NCSS +
			"cssmenu>ul>li>a,." +
			NCSS +
			"footer-help a,." +
			NCSS +
			"mcd-menu li a strong,." +
			NCSS +
			"nep-menu-list-con a,." +
			NCSS +
			"nep_info_game,." +
			NCSS +
			"news-temp ." +
			NCSS +
			"item-title h4{text-transform: uppercase}." +
			NCSS +
			"fa{display: inline-block; font-size: inherit; text-rendering: auto; -webkit-font-smoothing: antialiased}." +
			NCSS +
			"emu-ctr-bar:hover{bottom: 0px!important}#" +
			NCSS +
			"status{padding-right: 0; font-size: 12pt; margin: 0; width: 240px}." +
			NCSS +
			"note{color: rgb(255, 255, 255); font-size: 14px; background: rgba(0, 0, 0, .86); letter-spacing: 1px; font-family: 'PT Sans', sans-serif; text-align: left; padding: 15px!important; z-index: 3; position: absolute; bottom: 5px; left: 0; text-decoration: none; right: 0}." +
			NCSS +
			"pulse-anim{animation: pulse .8s linear infinite alternate}#" +
			NCSS +
			"Neptun{z-index: 1; overflow: hidden; position: absolute; width: 100%; height: 100%; top: 0; bottom: 0; left: 0; background-color: black; right: 0}." +
			NCSS +
			"logo-emul-top{margin-top: -500px!important}#" +
			NCSS +
			"EmuBlock input[type=checkbox],input[type=radio]{display: none}." +
			NCSS +
			"boxart{position: absolute!important; top: 0; width: 100%!important; max-width: 100%; clear: both; z-index: 5;}#" +
			NCSS +
			"emul-menu,." +
			NCSS +
			"emul-display,." +
			NCSS +
			"menu-span,." +
			NCSS +
			"setings p{display: block}." +
			NCSS +
			"loader_emu,." +
			NCSS +
			"menu-span{line-height: 40px; font-weight: 700}." +
			NCSS +
			"footer-help a,." +
			NCSS +
			"mod-index h2,." +
			NCSS +
			"NeptunContextMenu ul li{font-family: Verdana, Geneva, sans-serif !important}." +
			NCSS +
			"displayX{width: auto!important}." +
			NCSS +
			"NeptunContextMenu{background-clip: padding-box; background-color: rgba(25, 24, 24, .9); border: 1px solid rgba(0, 0, 0, .1); border-radius: 2px; box-shadow: 0 2px 2px rgba(0, 0, 0, .15); box-sizing: border-box; display: block; height: 0; opacity: 0; overflow: hidden; width: 0; z-index: 9999}." +
			NCSS +
			"NeptunContextMenu." +
			NCSS +
			"active{opacity: 1; height: auto; width: auto; border-radius: 4px;}." +
			NCSS +
			"NeptunContextMenu ul{font-size: 15px; list-style: none; margin: 2px 0 0; padding: 4px 0; text-align: left}." +
			NCSS +
			"NeptunContextMenu ul li{clear: both; color: #a5a5a5; cursor: pointer; font-weight: 400; line-height: 1.42857 !important; padding: 2px 20px !important; white-space: nowrap;}." +
			NCSS +
			"NeptunContextMenu ul hr{background: #e8e8e8; border: 0; color: #e8e8e8; height: 1px; margin: 4px 0}." +
			NCSS +
			"bg-bottom,." +
			NCSS +
			"footer-gear1,." +
			NCSS +
			"footer-gear2,." +
			NCSS +
			"footer-gear3,." +
			NCSS +
			"footer-gear4,." +
			NCSS +
			"footer-gear5,." +
			NCSS +
			"footer-vk,." +
			NCSS +
			"NeptunContextMenu{position: absolute}#" +
			NCSS +
			"emul-menu{width: 100%; overflow: hidden; background: #222; position: absolute; padding-right: 0; margin-left: auto; margin-right: auto; z-index: 4}." +
			NCSS +
			"emu-ctr-bar{height: 100px; z-index: 2; bottom: -100px; left: 0px; right: 0px; cursor: default; -moz-transition: width 500ms ease-out,opacity 400ms linear; -ms-transition: width 500ms ease-out,opacity 400ms linear; -o-transition: width 500ms ease-out,opacity 400ms linear; -webkit-transition: width 500ms ease-out,opacity 400ms linear; transition: width 500ms ease-out,opacity 400ms linear; transition: all .2s ease-in-out; box-shadow: inset #000000d4 0px -78px 72px -47px;}." +
			NCSS +
			"emu-ctr-bar,." +
			NCSS +
			"emul-pause{width: 100%; position: absolute}." +
			NCSS +
			"emu-but{padding: 0 !important; margin: 8px !important; margin-left: 0px !important; margin-right: 8px !important;}." +
			NCSS +
			"emu-but li{width: 50px; display: inline-block; list-style-type: none}." +
			NCSS +
			"demo-icon{font-style: normal; font-weight: 400; speak: none; display: inline-block; text-decoration: inherit; width: 1em; margin-right: .2em; text-align: center; font-variant: normal; text-transform: none; width: 100%; line-height: 1em; margin-left: .2em; -webkit-font-smoothing: antialiased;}#" +
			NCSS +
			"browsers-emul{text-align: center; font-size: 18px; font-family: Verdana, Geneva, sans-serif !important; text-transform: uppercase; color: red}#" +
			NCSS +
			"fakerom,." +
			NCSS +
			"menu-span{z-index: 3; width: 100%; position: relative}." +
			NCSS +
			"menu-span{color: #fff !important; font-size: .75em; letter-spacing: .1px; text-decoration: none; cursor: pointer; -webkit-transition: background-color 150ms ease-in; -moz-transition: background-color 150ms ease-in; -ms-transition: background-color 150ms ease-in; -o-transition: background-color 150ms ease-in; transition: background-color 150ms ease-in}#" +
			NCSS +
			"browsers-emul,." +
			NCSS +
			"nep-video .nep-icon-pause2{position: absolute; right: 0; bottom: 0}." +
			NCSS +
			"brw{width: 153.3px; height: 153.3px; float: left; margin: 5px}." +
			NCSS +
			"chrome{background: url(https://mem.neptunjs.xyz/neptun/img/UI/chrome.png); background-size: 100%}." +
			NCSS +
			"brw,." +
			NCSS +
			"iframeblocker{cursor: pointer; margin: 0 auto; position: relative; left: 25%; top: 30%}." +
			NCSS +
			"more,." +
			NCSS +
			"video-info a{font-family: Verdana, Geneva, sans-serif !important}." +
			NCSS +
			"cat-info,." +
			NCSS +
			"hit-info a,." +
			NCSS +
			"mcd-menu li a,." +
			NCSS +
			"more,." +
			NCSS +
			"video-hits, canvas,a{text-align: center}a{text-decoration: none}a{outline: 0}." +
			NCSS +
			"clear{clear: both}." +
			NCSS +
			"emul-pause{overflow-y: auto;overflow-x: hidden;height: 100%; background: rgba(29, 28, 28, .94); z-index: 3; left: 0; webkit-transform: scale(1); -moz-transform: scale(1); -ms-transform: scale(1); transform: scale(1); transition: all .2s ease-in-out}." +
			NCSS +
			"emul-pause,." +
			NCSS +
			"emul-sheders{-webkit-transition: all .2s ease-in-out; -moz-transition: all .2s ease-in-out; -o-transition: all .2s ease-in-out}." +
			NCSS +
			"emul-pause .nep-icon-pause2,." +
			NCSS +
			"nep-video .nep-icon-pause2{animation: pulse_font .8s linear infinite alternate}@keyframes pulse_font{0%{opacity: 0}100%{opacity: 1}}#gamepads{font-size: 11px;padding-top: 6px !important;line-height: 16px !important}#" +
			NCSS +
			"emul-menu h1,." +
			NCSS +
			"bx-wrapper ." +
			NCSS +
			"bx-pager,." +
			NCSS +
			"cop h2,." +
			NCSS +
			"menu-span,." +
			NCSS +
			"nep-rating p,." +
			NCSS +
			"setings p{text-align: center}." +
			NCSS +
			"menu-span,." +
			NCSS +
			"nep-rating p span,." +
			NCSS +
			"setings p{font-family: Verdana, Geneva, sans-serif !important}." +
			NCSS +
			"nep_info_game{position: absolute; z-index: 276; background: rgba(23, 23, 23, .8); min-width: 410px; height: 59px; color: #fff; float: left; overflow: hidden; top: 0; left: -640px; text-align: center; font-size: 14px; font-family: Verdana, Geneva, sans-serif ; -webkit-transition: all .5s cubic-bezier(.42, .13, .030, .995); -moz-transition: all .5s cubic-bezier(.42, .13, .030, .995); -o-transition: all .5s cubic-bezier(.42, .13, .030, .995); transition: all .5s cubic-bezier(.42, .13, .030, .995);}#" +
			NCSS +
			"display{z-index: 1; margin: 0 auto; position: absolute; left: 0; right: 0; top: 0; bottom: 0; height: 100%; max-width: 100%}#" +
			NCSS +
			"progressbar{width: 240px; background: #fff; font-size: 5pt; margin-top: 0; margin: 0 auto; bottom: 15px; height: 10px; position: relative;}#" +
			NCSS +
			"progressbar,." +
			NCSS +
			"help1,." +
			NCSS +
			"help2,." +
			NCSS +
			"help3,." +
			NCSS +
			"help4{display: none}." +
			NCSS +
			"emul-sheders{height: 41px; width: 100%; overflow: hidden; float: left; background: #000; margin-top: 1px; position: relative; -ms-transition: all .2s ease-in-out; transition: all .2s ease-in-out}." +
			NCSS +
			"emul-sheders:hover{height: 252px}." +
			NCSS +
			"help{background: rgba(33, 33, 33, .91); width: 100%; height: 100%; position: absolute; text-align: center; display: none; z-index: 10}." +
			NCSS +
			"img-controll{margin: 0 auto; width: 99%; height: 94%; opacity: 1; position: absolute; -webkit-transition: 300ms ease-out; -moz-transition: 300ms ease-out; -ms-transition: 300ms ease-out; -o-transition: 300ms ease-out; transition: 300ms ease-out; -webkit-transition-property: visibility, opacity, -webkit-transform; -moz-transition-property: visibility, opacity, -moz-transform; -ms-transition-property: visibility, opacity, -ms-transform; -o-transition-property: visibility, opacity, -o-transform; transition-property: visibility, opacity, transform}#" +
			NCSS +
			"emul-menu h1,." +
			NCSS +
			"controll-key p,." +
			NCSS +
			"loader_emu{font-family: 'PT Sans', sans-serif}." +
			NCSS +
			"controll-info,." +
			NCSS +
			"loader_emu{text-align: center; text-decoration: none;}." +
			NCSS +
			"NeptunButton{z-index:6;top:10px;bottom:unset;}." +
			NCSS +
			"NeptunButton{height: 44px; width: 240px; overflow: hidden; position: relative; margin: 0 auto; bottom: 15px; display: none}#" +
			NCSS +
			"slider{height: 5px; background-color: #ffffff; top: 0px; left: 0px; position: absolute; cursor: pointer; max-width: 100%;}#" +
			NCSS +
			"bar{width: 80px; max-width: 80px; position: relative; height: 50px; float: left; left: 5px; padding: 12px 0px 12px 0px; top: 60px;}#" +
			NCSS +
			"progressinfo{position: relative; height: 10px; width: 100%; float: left;}#" +
			NCSS +
			"progressstate{height: 20px; background-color: " +
			NepColor +
			"; top: 0px; left: 0px; position: absolute;}#" +
			NCSS +
			"volbg{background: #717171;height: 5px;position: relative;cursor: pointer;}#" +
			NCSS +
			"fakerom{font-size: 20pt; position: absolute!important; bottom: 0; width: 100%; clear: both; z-index: 5!important}#" +
			NCSS +
			"videoSettings{position: absolute; width:auto; right: 5px; border-radius: 4px; bottom: 55px; background: rgba(21, 21, 21, .85); z-index: 3; padding: 5px; display:none; outline: 0px;}#" +
			NCSS +
			"videoSettings ." +
			NCSS +
			"voption:hover{background-color: #3e3e3eab;cursor:pointer;color: white;}#" +
			NCSS +
			"videoSettings ." +
			NCSS +
			"voption:hover ." +
			NCSS +
			"-iconmenu{color: white;}#" +
			NCSS +
			"videoSettings ." +
			NCSS +
			"voption:hover ." +
			NCSS +
			"-lablemenu{color: white;}#" +
			NCSS +
			"EmuBlock{height: 100%;-webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;}#" +
			NCSS +
			"menuNjs{width: 300px;float:left;}." +
			NCSS +
			"back{border-bottom: 1px solid #3a3a3a;}#" +
			NCSS +
			"armenu{display:none;float:left;width: 190px;}#" +
			NCSS +
			"smenu{display:none;float:left;width: 190px;position: relative;}#" +
			NCSS +
			"colormenu{display:none;float:left;width:220px;}#" +
			NCSS +
			"emulmenu{display:none;float:left;width:220px;}." +
			NCSS +
			"-iconmenu{float:left;padding-right: 5px;padding-left: 8px;font-size: 24px;color: #777;}." +
			NCSS +
			"-lablemenu{float:left;font-size: 13px;color: #777;font-weight: 400;padding: 2px;font-family: Verdana, Geneva, sans-serif;}." +
			NCSS +
			"-lablemenu:hover{color:#ffffff;}." +
			NCSS +
			"-iconnext{float:right;padding: 5px;font-size: 14px;color: white;}." +
			NCSS +
			"voption{float: left;width: 100%;padding: 2px 0px 2px 0px;}." +
			NCSS +
			"logo-emul{width: 200px; height: 200px; margin: 15% auto 0; background-size: 100%; z-index: 1; position: relative}." +
			NCSS +
			"loadlabel{font-size: 26px !important;cursor:pointer;}." +
			NCSS +
			"NEPfullS." +
			NCSS +
			"the-icons{margin-right: 5px;}." +
			NCSS +
			"logo-emul,." +
			NCSS +
			"logo-emul-top{-webkit-transition: all .2s ease-in-out; -moz-transition: all .2s ease-in-out; -o-transition: all .2s ease-in-out; -ms-transition: all .2s ease-in-out; transition: all .2s ease-in-out}." +
			NCSS +
			"boxart img{position: relative; width: 55%;top:0px; display: flex; margin: 0 auto;}#volumeicon{margin-left: 0px;width:5px;height: 20px;bottom: -7.2px;background: #fff;left: 100%;position: absolute;cursor: pointer;}." +
			NCSS +
			"ss-container:hover ." +
			NCSS +
			"ss-scroll{opacity: 1}." +
			NCSS +
			"info-icon{font-size: 32px; left: 10px; position: relative; top: 14px; float: left;}#" +
			NCSS +
			"lableShader{    padding: 2px;float:left;text-align: center;width: 100px;font-size: 14px;color: #a2a2a2;font-weight: 400 !important;font-family: Verdana, Geneva, sans-serif;}#" +
			NCSS +
			"lableAr{padding: 2px;float:left;text-align: center;width: 88px;font-size: 14px;color: #a2a2a2;font-weight: 400 !important;font-family: Verdana, Geneva, sans-serif;}." +
			NCSS +
			"ss-grabbed{-o-user-select: none; -ms-user-select: none; -moz-user-select: none; -webkit-user-select: none; user-select: none}";
		NeptunCSS = sscbs + Ncss0 + Ncss1 + Ncss4 + Ncss2 + Ncss3;
		if (NeptunP === "msx" || NeptunP === "zx" || rbtl === false) {
			html_help_img = "";
		} else {
			//pause menu gamepad image
			html_help_img =
				'<img class="' +
				NCSS +
				'infopanel" src="imgs/' +
				imageEmulCont +
				'.png"  alt="' +
				imageEmulCont +
				'"/>';
		}
		//pause menu gamepad image again?
		html_help_imgs =
			'<img class="' +
			NCSS +
			'infopanel" src="imgs/' +
			imageEmulCont +
			'.png"  alt="' +
			imageEmulCont +
			'"/>';
		ifad = "<div></div>";
		ifadn = "<div></div>";
		vad = "<div></div>";
		Npause =
			'<div class="' +
			NCSS +
			"emul-pause " +
			NCSS +
			'cph " data="first"><div class="' +
			NCSS +
			"demo-icon " +
			NCSS +
			'icon-pause"><div class="nep-icon-pause2"></div></div><div class="' +
			NCSS +
			'controll-pause-help "><h2>' +
			controlLang +
			'</h2><div id="' +
			NCSS +
			'controll-helpNum" class="' +
			NCSS +
			"medium-5 " +
			NCSS +
			'columns">' +
			html_help_img +
			"" +
			ifadn +
			'<div id="' +
			NCSS +
			'infoCC">' +
			infohConHtml +
			'</div></div><div class="' +
			NCSS +
			'clear"></div></div></div>';
		if (jscd.browser === "Microsoft Edge") {
			if (jscd.browserMajorVersion >= 12) {
				edge = false;
			} else {
				edge = true;
			}
		} else {
			if (jscd.browser === "Chrome") {
				if (jscd.browserMajorVersion >= 57) {
					chrome = false;
				} else {
					chrome = true;
				}
			} else {
				if (jscd.browser === "Firefox") {
					if (jscd.browserMajorVersion >= 52) {
						firefox = false;
					} else {
						firefox = true;
					}
				} else {
					if (jscd.browser === "Opera") {
						if (jscd.browserMajorVersion >= 44) {
							opera = false;
						} else {
							opera = true;
						}
					} else {
						if (jscd.browser === "Safari") {
							edge = true;
						} else {
							if (
								jscd.browser === "Microsoft Internet Explorer" ||
								jscd.browser === "Trident/"
							) {
								edge = true;
							}
						}
					}
				}
			}
		}
		htmlprogress =
			"<div id=" +
			NCSS +
			'progressbar><div id="' +
			NCSS +
			'progressinfo"><div id="' +
			NCSS +
			'progressstate"></div></div></div>';
		_0x13E9F();
	}
	return 7622;
})();

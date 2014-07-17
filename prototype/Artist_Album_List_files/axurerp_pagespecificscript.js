for(var i = 0; i < 10; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u1'] = 'center';u2.tabIndex = 0;

u2.style.cursor = 'pointer';
$axure.eventManager.click('u2', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Album_Detail___new.html');

}
});

$axure.eventManager.mouseover('u4', function(e) {
if (!IsTrueMouseOver('u4',e)) return;
if (true) {

	SetPanelVisibility('u3','hidden','none',500);

	SendToBack("u3");

}
});
document.getElementById('u6_img').tabIndex = 0;

u6.style.cursor = 'pointer';
$axure.eventManager.click('u6', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Album_Detail___list_album.html');

}
});
gv_vAlignTable['u7'] = 'center';
$axure.eventManager.mouseover('u8', function(e) {
if (!IsTrueMouseOver('u8',e)) return;
if (true) {

	BringToFront("u3");

	SetPanelVisibility('u3','','none',500);

}
});
gv_vAlignTable['u9'] = 'center';
const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.solid,
		C3.Plugins.Keyboard,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Behaviors.Platform.Cnds.OnStop
	];
};
self.C3_JsPropNameTable = [
	{Platform: 0},
	{coolizard: 0},
	{background: 0},
	{Solid: 0},
	{ground01: 0},
	{Keyboard: 0},
	{ground02: 0}
];

self.InstanceType = {
	coolizard: class extends self.ISpriteInstance {},
	background: class extends self.ISpriteInstance {},
	ground01: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	ground02: class extends self.ISpriteInstance {}
}
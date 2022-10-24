
export function play(component: HTMLElement) {

	const audio = component.querySelector('audio') as HTMLAudioElement;

	audio.load();
	audio.play();
}
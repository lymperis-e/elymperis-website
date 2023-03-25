import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';


const files1 = await imagemin(['./_raw_img/img/*.{jpg,png}'], {
	destination: './public/img',
	plugins: [
		imageminWebp({quality: 70})
	]
});

const files2 = await imagemin(['./_raw_img/img/projects/*.{jpg,png}'], {
	destination: './public/img/projects',
	plugins: [
		imageminWebp({quality: 70})
	]
});

const files3 = await imagemin(['./_raw_img/maps/*.{jpg,png}'], {
	destination: './public/maps',
	plugins: [
		imageminWebp({quality: 70})
	]
});

console.log(files1);
console.log(files2);
console.log(files3);
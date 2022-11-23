#! /usr/bin/env node
import path from 'path';
import argv from 'process.argv';
import shell from 'shelljs';
import walkSync from 'walk-sync';
import { logger } from './utils/logger';

const processArgv = argv(process.argv.slice(2));
const fixPath = (_path: string) => _path.replace(/ /g, '\\ ');
const makeFFMPEGCommand = (
	source: string,
	destination: string,
	angel: string,
) => {
	const executableCommand = `ffmpeg -i ${fixPath(
		source,
	)} -c:v copy -metadata:s:v:0 rotate=${angel} ${fixPath(destination)}`;
	return executableCommand;
};

const rotateVideo = (source: string, destination: string, angel: string) => {
	const executableCommand = makeFFMPEGCommand(source, destination, angel);
	logger.succeed(`\n${destination} DONE\n`);
	shell.exec(executableCommand, {});
};

(async () => {
	const config = processArgv({
		source: '',
		destination: '',
		extension: 'mp4',
		angel: '90',
	});

	if (config.source.includes(config.extension)) {
		const filename = config.source.replace(/^.*[\\\/]/, '');
		const destination = path.resolve(config.destination, filename);
		rotateVideo(config.source, destination, config.angel);
	} else {
		const paths = walkSync(config.source, {
			globs: [`**/*.${config.extension}`],
			includeBasePath: true,
		});
		paths.forEach((item) => {
			if (item.includes(config.extension)) {
				const filename = item.replace(/^.*[\\\/]/, '');
				const destination = path.resolve(config.destination, filename);
				rotateVideo(item, destination, config.angel);
			}
		});
		console.table(paths);
	}
})();

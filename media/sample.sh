#!/bin/bash
#Usage: wav2mp3.sh input.wav output.mp3
ffmpeg -i $1 -ac 2 -codec:a libmp3lame -b:a 48k -ar 24000 -write_xing 0 $2

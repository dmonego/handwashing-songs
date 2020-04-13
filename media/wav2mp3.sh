#!/bin/bash
#Usage: wav2mp3.sh input.wav output.mp3
ffmpeg -i $1 -acodec mp3 $2

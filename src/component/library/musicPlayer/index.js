import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';
import loverCover from './static/Lover.png'
import loverAudio from './static/summer.mp3'
import lrc from './static/data'
import { useRef } from 'react';
import classNames from 'classnames';
import mainCss from './static/index.css'
const WallPaper = styled('div')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  overflow: 'hidden',
  background: 'linear-gradient(rgb(255, 38, 142) 0%, rgb(255, 105, 79) 100%)',
  transition: 'all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s',
  '&::before': {
    content: '""',
    width: '140%',
    height: '140%',
    position: 'absolute',
    top: '-40%',
    right: '-50%',
    background:
      'radial-gradient(at center center, rgb(62, 79, 249) 0%, rgba(62, 79, 249, 0) 64%)',
  },
  '&::after': {
    content: '""',
    width: '140%',
    height: '140%',
    position: 'absolute',
    bottom: '-50%',
    left: '-30%',
    background:
      'radial-gradient(at center center, rgb(247, 237, 225) 0%, rgba(247, 237, 225, 0) 70%)',
    transform: 'rotate(30deg)',
  },
});

const Widget = styled('div')(({ theme }) => ({
  padding: 16,
  borderRadius: 16,
  width: 343,
  maxWidth: '100%',
  margin: 'auto',
  position: 'relative',
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.4)',
  backdropFilter: 'blur(40px)',
}));

const CoverImage = styled('div')({
  width: 100,
  height: 100,
  objectFit: 'cover',
  overflow: 'hidden',
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: 'rgba(0,0,0,0.08)',
  '& > img': {
    width: '100%',
  },
});

const TinyText = styled(Typography)({
  fontSize: '0.75rem',
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

export default function MusicPlayerSlider() {
  const audioRef = React.useRef();
  const refContainer = useRef()
  const refLyrics = useRef();
  const theme = useTheme();
  const duration = 178; // seconds
  let [position, setPosition] = React.useState(0);
  let [volume, setVolume] = React.useState(30);
  const [dimensions, setDimensions] = React.useState({
    containerHeight: 0,
    liHeight: 0,
    offSetMax: 0,
  });
  function parseTime(str) {
    let minutes = str.slice(0, 2)
    let seconds = str.slice(3, 8);
    let parsedTime = 0;
    parsedTime = parseInt(minutes) * 60 + parseFloat(seconds)
    return parsedTime;
  }

  function parseLrc(lrc) {
    const resArr = []
    const lrcToArr = lrc.split('\n');
    for (let i of lrcToArr) {
      let chipArr = i.split(']')
      resArr.push({
        time: parseTime(chipArr[0].slice(1)),
        words: chipArr[1]
      })
    }
    return resArr;
  }
  const resArr = parseLrc(lrc)

  function findIndex() {
    let currentTime = position;
    for (let i in resArr) {
      if (resArr[i].time > currentTime) {
        return i - 1;
      }
      else if (i === undefined) {
        return resArr.length - 1
      }
    }
  }
  function setOffSet(){
    var index = findIndex()
    var h1 = dimensions.liHeight*index + dimensions.liHeight/2;
    var offset = h1 - dimensions.containerHeight/2;
    if(offset<0){offset=0}
    else if(offset>dimensions.offSetMax){offset=dimensions.offSetMax}
    refLyrics.current.style = `transform:translateY(-${offset}px)`
  }
  const [paused, setPaused] = React.useState(true);
  React.useEffect(() => {
    audioRef.current.volume = volume / 100;
    setDimensions({
      containerHeight: refContainer.current.clientHeight,
      liHeight: refLyrics.current.children[0].clientHeight,
      offSetMax: refLyrics.current.clientHeight - refContainer.current.clientHeight,
    });
  }, [])

  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }
  const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';
  const lightIconColor =
    theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';
  const intervalRef = useRef(null)
  const handleMusic = () => {
    if (paused === true) {
      audioRef.current.currentTime = position;
      audioRef.current.play()
      setPaused(false)
      intervalRef.current = setInterval(() => {
        setPosition(position += 0.1)
        if (position >= duration) {
          clearInterval(intervalRef.current)
          setPosition(0);
          setPaused(true)
        }
      }, 100);
    } else {
      audioRef.current.pause()
      setPaused(true)
      clearInterval(intervalRef.current)
    }
  }
  return (
    <>
      <audio src={loverAudio} ref={audioRef} onTimeUpdate={()=>{setOffSet()}}></audio>
      <div className='flex w-full justify-between items-center h-screen'>
        <WallPaper />
        <div className='grow-[1]'>
          <Box sx={{ width: '100%', overflow: 'hidden' }}>
            <Widget>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <CoverImage>
                  <img
                    alt="Crul Summer - Taylor Swift"
                    src={loverCover}
                  />
                </CoverImage>
                <Box sx={{ ml: 1.5, minWidth: 0 }}>
                  <Typography variant="caption" color="text.secondary" fontWeight={500}>
                    INTERNATIONAL POP 2019
                  </Typography>
                  <Typography noWrap>
                    <b>Crul Summer (Premium)</b>
                  </Typography>
                  <Typography noWrap letterSpacing={-0.25}>
                    Taylor Swift &mdash; Crul Summer
                  </Typography>
                </Box>
              </Box>
              <Slider
                aria-label="time-indicator"
                size="small"
                value={position}
                min={0}
                step={1}
                max={duration}
                onChange={(_, value) => setPosition(value)}
                sx={{
                  color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                  height: 4,
                  '& .MuiSlider-thumb': {
                    width: 8,
                    height: 8,
                    transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                    '&::before': {
                      boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                    },
                    '&:hover, &.Mui-focusVisible': {
                      boxShadow: `0px 0px 0px 8px ${theme.palette.mode === 'dark'
                        ? 'rgb(255 255 255 / 16%)'
                        : 'rgb(0 0 0 / 16%)'
                        }`,
                    },
                    '&.Mui-active': {
                      width: 20,
                      height: 20,
                    },
                  },
                  '& .MuiSlider-rail': {
                    opacity: 0.28,
                  },
                }}
              />
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mt: -2,
                }}
              >
                <TinyText>{formatDuration(Math.floor(position))}</TinyText>
                <TinyText>-{formatDuration(Math.floor(duration - position))}</TinyText>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mt: -1,
                }}
              >
                <IconButton aria-label="previous song">
                  <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
                </IconButton>
                <IconButton
                  aria-label={paused ? 'play' : 'pause'}
                  onClick={handleMusic}
                >
                  {paused ? (
                    <PlayArrowRounded
                      sx={{ fontSize: '3rem' }}
                      htmlColor={mainIconColor}
                    />
                  ) : (
                    <PauseRounded sx={{ fontSize: '3rem' }} htmlColor={mainIconColor} />
                  )}
                </IconButton>
                <IconButton aria-label="next song">
                  <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
                </IconButton>
              </Box>
              <Stack spacing={2} direction="row" sx={{ mb: 1, px: 1 }} alignItems="center">
                <VolumeDownRounded htmlColor={lightIconColor} />
                <Slider
                  aria-label="Volume"
                  defaultValue={30}
                  onChange={(_, value) => { setVolume(value); audioRef.current.volume = volume === 1 ? 0 : volume / 100; }}
                  sx={{
                    color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                    '& .MuiSlider-track': {
                      border: 'none',
                    },
                    '& .MuiSlider-thumb': {
                      width: 24,
                      height: 24,
                      backgroundColor: '#fff',
                      '&::before': {
                        boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                      },
                      '&:hover, &.Mui-focusVisible, &.Mui-active': {
                        boxShadow: 'none',
                      },
                    },
                  }}
                />
                <VolumeUpRounded htmlColor={lightIconColor} />
              </Stack>
            </Widget>
          </Box>
        </div>
        <div ref={refContainer} className='z-10 grow-[1] text-lg lg:flex flex-col h-96 w-32 overflow-hidden items-center leading-8 font-InterItalic text-zinc-900 font-bold hidden'>
          <ul ref={refLyrics} className='transition-all duration-300' id='lyrics'>
            {resArr.map((item,index) => { return <li key={index} className={classNames('text-center',{'active':index===findIndex()})}>{item.words}</li> })}
          </ul>
        </div>
      </div>
    </>
  );
}
---
layout: post
title:  "Placerctrl Ubuntu 15.04"
date:   2015-02-03 11:08:29
categories: Ubuntu, i3
---

I've been using [i3](http://i3wm.org/) as my default window manager recently and wanted a way to controll my music from my keyboard using the media buttons.
Volume wasn't a problem, but I wanted to use my pause, next, and prev keys as well.  I found [playerctl](https://github.com/acrisci/playerctl), which is a way to control your music from the command line

## Installation
You'll need to install GTK-doc, gobject-introspection, and build-essentials to build Playerctrl
```apt-get install gtk-doc-tools gobject-introspection build-essential libglib2.0-dev```

After this is installed you can build Playerctrl

```./autogen.sh```

```make```

```sudo make install```

```sudo ldconfig```

## .i3/config

~~~
bindsym XF86AudioPlay exec playerctl play-pause

bindsym XF86AudioStop exec playerctl stop

bindsym XF86AudioNext exec playerctl next

bindsym XF86AudioPrev exec playerctl previous
~~~

I also added my media keys to my i3 config:

~~~
bindsym XF86AudioRaiseVolume exec amixer -q set Master 2dB+ unmute

bindsym XF86AudioLowerVolume exec amixer -q set Master 2dB- unmute

bindsym XF86AudioMute exec amixer -q -D pulse set Master toggle
~~~


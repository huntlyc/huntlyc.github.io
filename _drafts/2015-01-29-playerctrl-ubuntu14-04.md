need to install GTK-doc and gobject-introspection build-essentials
```apt-get install gtk-doc-tools gobject-introspection build-essentials```
```./autogen.sh ```
```make```
```sudo make install```
```sudo ldconfig```

.i3/config

bindsym XF86AudioRaiseVolume exec amixer -q set Master 2dB+ unmute
bindsym XF86AudioLowerVolume exec amixer -q set Master 2dB- unmute
bindsym XF86AudioMute exec amixer -q -D pulse set Master toggle

bindsym XF86AudioPlay exec playerctl play-pause
bindsym XF86AudioStop exec playerctl stop
bindsym XF86AudioNext exec playerctl next
bindsym XF86AudioPrev exec playerctl previous

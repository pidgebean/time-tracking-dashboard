[8:42AM]
Okay, it's official. I have no idea what I did to make the radio buttons work. I've done this several times, but for some reason I can't get it to work for this program.

I have a memory of changing one small little thing, and then it working like magic, but I can't remember or find what that thing was. 

[10:54AM]
Seriously? Okay, so I finally caved and googled it. Apparently, if you only want one radio button selected at a time, all you have to do is give them all the same name. 

But I was right about how just changing oen small thing got it to work.

So that's that problem solved. 

[00:02:00]
Okay, the next problem I need to solve is to access the data from the data.json file. I'm still not super familiar with JavaScript, but it looks like some sort of dictionary. I can look up a Youtube video. 

[00:37:00]
I would save a lot of time on these programming projects if I actually thought them through all the way. I always THINK I understand how to do it, but then I spend half my time undoing something or going back because I misunderstood or realized there was a better way to do it or that I was just plain doing it wrong. It's frustrating beyond belief.

But how do I plan out a project in a way that will forsee these unforseen problems before they happen? Reading the entire description would probably help. And there are probably tons of Youtube videos about how to properly plan out a project. Half of them will be all about the stupid obvious stuff. But I should probably give it a look anyway. 

[01:01:00]
Well, I'm doing something wrong. So I watched a video on how to work with JSON files. It's pretty simple really. All I needed was the commmand. The only problem is, the video didn't go over what the command would be if the dictionary included an object type. So I don't know how to phrase that part of the command, which is probably why it's not working. 

[01:07:00]
So google isn't really giving me the exact answer I want. Off to ChatGPT I go.

[01:10:00]
That wasn't really helpful. ChatGPT had an interesting solution of basically looping through the data until it found the right one. But as this is a dictionary, I should just be able to access it via the title. That's the whole point of a dictionary. 

[01:20:00]
Okay, it's partially working. The problem was I wasn't going doing the tree properly. But it only works on the work square and the play square, and the "previous" portion comes up as undefined. I'm not sure what's that about.

[02:00:00]
Still don't know what its problem is. There is also an additional problem. I want one of the tabs to be checked by default. However, when I put "checked" in the HTML, it messes with the whole thing. It makes it so Daily is always checked, which isn't what I want. 

I could do some sort of JavaScript function, that would set the daily tab to be true upon startup. But how would I call it? Usually I call a function by using the onclick feature of HTML. I suppose I could add a script tag and just do it that way. There has got to be an easier way to do this. 

[02:06:00]
Okay, I think it's the JavaScript function that is messing everything up. Because once I click daily, you can't click on anything else. It's probably running into an error and getting stuck. 

[02:14:00]
Okay, I was right that it was getting stuck on an error. It seems to be getting mad about the exerciseHours parse line in each of the if statements. No other parse lines, just that one. 

[Unknown]
Okay, I gave up trying to access the data, since I don't know how to do that with JavaScript yet. I got it working with if statements, which is great.

The next problem I need to conquer is figuring out how to make one of the radio buttons checked by default.

[02:30:00]
Okay, using the checked="checked" html property worked this time. Why it didn't work last time, I have no idea.

Next thing to conquer is mobile view. This is going to be annoying.
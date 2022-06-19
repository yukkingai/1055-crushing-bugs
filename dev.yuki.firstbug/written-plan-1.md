# Multimedia Authoring 2 - Crushing Bugs Assignment

This is for the 1st debugging problem.

1. There are more than one puzzles can be dragged and dropped into a drop zone

The problem is four puzzles can be moved into any one of the drop zone without limit. I checked the debugger from "inspect", there is one calls "childElementCount" that affects the drop zone container. The drop zone didn't set a limit of "childElementCount" which leads more than one puzzles can be dropped into there.

Therefore, we can add a if function to set the "childElementCount" condition, and makes drop zone rejects to drop by count greater than 0. The solution is similar to the if (!targetAudio) { return} example from the last class, if the childElementCount is greater than 0, means that the drop zone already has 1 puzzle, then the function will take no action afterward.

:no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth:  :kissing_smiling_eyes: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth:

# MIT License

Copyright 2022 Yukki Ngai

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

:no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth::no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth:  :kissing_smiling_eyes: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth: :no_mouth:

# Contact

Free feel to contact me if you want to work any fun project with me :kissing_smiling_eyes:

email: y_ngai@fanshaweonline.ca

# About me

Unprofessional web design student trys to look professional.

I can chat with weirdo, please try to work with me if you are lol

I wish I am abnormal...

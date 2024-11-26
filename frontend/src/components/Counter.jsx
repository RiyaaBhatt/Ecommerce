import React from 'react'
import Countdown from 'react-countdown';

export default function Counter({days, hours, minutes, seconds, completed }) {
  return (
    <div>
        <div className="flex items-center justify-center w-full gap-1.5 count-down-main">
<div className="timer">
<div
className="rounded-xl border border-black-600 py-1.5 min-w-[80px] flex items-center justify-center flex-col gap-0 aspect-square px-1.5">
<h3
  className="countdown-element days font-manrope font-semibold text-2xl text-black-600 text-center">
   {days}
</h3> 
<p className="text-sm font-inter capitalize font-normal text-black-600 text-center w-full">days</p>
</div>
</div>
<h3 className="font-manrope font-semibold text-2xl text-gray-900">:</h3>
<div className="timer">
<div
className="rounded-xl border border-black-600 py-1.5 min-w-[80px] flex items-center justify-center flex-col gap-0 aspect-square px-1.5">
<h3
  className="countdown-element hours font-manrope font-semibold text-2xl text-black-600 text-center">
    {hours}
</h3>
<p className="text-sm font-inter capitalize font-normal text-black-600 text-center w-full">Hour</p>
</div>
</div>
<h3 className="font-manrope font-semibold text-2xl text-gray-900">:</h3>
<div className="timer">
<div
className="rounded-xl border border-black-600 py-1.5 min-w-[80px] flex items-center justify-center flex-col gap-0 aspect-square px-1.5">
<h3
  className="countdown-element minutes font-manrope font-semibold text-2xl text-black-600 text-center">
{minutes}
</h3>
<p className="text-sm font-inter capitalize font-normal text-black-600 text-center w-full">Minutes</p>
</div>
</div>
<h3 className="font-manrope font-semibold text-2xl text-gray-900">:</h3>
<div className="timer">
<div
className="rounded-xl border border-black-600 py-1.5 min-w-[80px] flex items-center justify-center flex-col gap-0 aspect-square px-1.5">
<h3
  className="countdown-element seconds sec font-manrope font-semibold text-2xl text-black-600 text-center">
    {seconds}
</h3>
<p className="text-sm font-inter capitalize font-normal text-black-600 text-center w-full">Seconds</p>
</div>
</div>
</div>
                    

      
    </div>
  )
}

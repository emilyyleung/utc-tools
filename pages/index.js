import { useEffect, useState } from 'react';
import Head from 'next/head';
import SimpleStats from 'components/Stats/SimpleStats';
import InputHiddenLabel from 'components/Form/Input/InputHiddenLabel';
import DateTimePicker from 'components/Form/Input/DateTimePicker';

import {
  format,
  getDate,
  getHours,
  getMinutes,
  getMonth,
  getSeconds,
  getYear,
  parseISO,
} from 'date-fns';

export default function Home() {
  const [datetime, setDatetime] = useState(new Date().toISOString());
  const values = [
    { key: 'Year', value: getYear(parseISO(datetime)) },
    { key: 'Month', value: getMonth(parseISO(datetime)) },
    { key: 'Day', value: getDate(parseISO(datetime)) },
    { key: 'Hour', value: getHours(parseISO(datetime)) },
    { key: 'Minute', value: getMinutes(parseISO(datetime)) },
    { key: 'Second', value: getSeconds(parseISO(datetime)) },
  ];
  return (
    <div className="bg-slate-100 min-h-screen">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Header /> */}
      <div className="mx-auto max-w-4xl grid grid-cols-1 gap-4 py-10 justify-items-center">
        <h1 className="text-4xl font-bold pb-20">UTC Tools</h1>
        <div className="grid grid-cols-[1fr_auto_1fr] place-items-center w-full px-4 md:px-0">
          <div className="w-full md:w-56 justify-self-end">
            <InputHiddenLabel
              label="Hello"
              name="timestamp"
              type="text"
              id="timestamp"
              placeholder="Enter timestamp"
              value={datetime}
              setValue={setDatetime}
            />
          </div>
          <div className="px-4 font-semibold">OR</div>
          <div className="w-full md:w-56 justify-self-start">
            <DateTimePicker value={parseISO(datetime)} setValue={setDatetime} />
          </div>
        </div>
        <SimpleStats data={values} />
      </div>
    </div>
  );
}

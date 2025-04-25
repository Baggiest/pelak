import { redirect } from 'next/navigation';
import Image from 'next/image'
import Link from 'next/link'
import PelakLogo from '../../public/pelak.svg'
import PelakIran from '../../public/pelak-iran.svg'

export default function Home() {
  redirect('/find-city');
}

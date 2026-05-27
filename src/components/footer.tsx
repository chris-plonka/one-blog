const Footer = () => {
  return (
    <footer className='mx-auto max-w-4xl px-6'>
      <div className='flex h-footer items-center justify-between'>
        <p className='text-sm'>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer

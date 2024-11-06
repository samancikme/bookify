import { toggleAuthType, toggleRegModal } from '../store/reducers/pageSlice'
import AccountEdit from '../components/pageComponents/AccountEdit'
import { useDispatch, useSelector } from 'react-redux'
import { BsFillPersonFill } from 'react-icons/bs'
import Container from '../components/Container'

const AccountSetting = () => {
  const dispatch = useDispatch()
  const { accountStatus } = useSelector(state => state.acc)


  return (
    <div className={`${accountStatus ? "min-h-[calc(100vh-70px)] " : "h-[calc(100vh-405px)] max-md:h-[calc(100vh-115px)]"}`}>
      <Container className={'h-full flex justify-center'}>
        {accountStatus ?
          <AccountEdit />
          :
          <div className='flex flex-col text-center w-full justify-center gap-5'>
            <div className="flex justify-center items-center">
              <div className="w-[100px] h-[100px] rounded-full border border-gray-400 flex justify-center items-center">
                <BsFillPersonFill className="text-[90px] text-gray-400" />
              </div>
            </div>
            <div className="flex flex-col gap-2 pb-3 w-full justify-center items-center">
              <button
                onClick={() => {
                  dispatch(toggleRegModal())
                  dispatch(toggleAuthType('sign-up'))
                }}
                className="text-[14px] text-center px-5 py-2 font-semibold hover:bg-gray-200 bg-gray-100  w-[60%] rounded-lg">
                Sign Up
              </button>
              <button
                onClick={() => {
                  dispatch(toggleRegModal())
                  dispatch(toggleAuthType('log-in'))
                }}
                className="text-[14px] text-center px-5 py-2 font-semibold hover:bg-gray-200 bg-gray-100  w-[60%] rounded-lg">
                Login
              </button>
            </div>
          </div>}
      </Container>
    </div>
  )
}

export default AccountSetting
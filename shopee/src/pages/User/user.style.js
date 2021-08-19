import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 2rem 0 5rem;
`

export const Sidebar = styled.div`
  flex-shrink: 0;
  width: 180px;
`

export const Main = styled.div`
  position: relative;
  flex-grow: 1;
  margin-left: 2.7rem;
`

export const Brief = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #efefef;
`

export const BriefAvatar = styled(Link)`
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const BriefRight = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-left: 15px;
  overflow: hidden;
`

export const BriefUsername = styled.div`
  margin-bottom: 5px;
  color: #333;
  font-weight: 600;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

export const BriefEdit = styled(Link)`
  color: #888;
  text-transform: capitalize;
`

export const SidebarMenu = styled.div`
  margin-top: 2.7rem;
`

export const SidebarMenuEntry = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-bottom: 1.8rem;
  color: rgba(0, 0, 0, 0.8);
  text-transform: capitalize;
  transition: color 0.2s ease;

  &:hover,
  &.active {
    color: #ee4d2d;
  }
`

export const SidebarMenuEntryIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  margin-right: 12px;
  border-radius: 50%;

  img {
    width: 20px;
    height: 20px;
  }
`

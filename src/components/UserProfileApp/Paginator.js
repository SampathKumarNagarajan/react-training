import React,{useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { setActivePage } from '../../redux/actions/PaginatorActions';
const Paginator = (props) => {
    const [active, setActive] = useState(1);
    const handleClick = (item) => {
       setActive(item) 
    }

    const handleNextOrPrev = (action) => {
        if((active === props.totalPages && action === '+') || (active === 1 && action === '-'))
            return;
        if(action === '+')
            setActive(active + 1);
        else
            setActive(active - 1);
    }
    useEffect(() => {
        props.setActivePage(active);
    },[active]);
    const getPages = () => {
        let pages = [];
        pages.push(<li><a className="page-link" onClick={() => handleNextOrPrev('-')} >Previous</a></li>)
        for(let i = 1; i <= props.totalPages; i++) {
            pages.push(<li className={`page-item ${i === active? 'active' : ''}`} key={i} onClick={() => handleClick(i)}><a className="page-link">{i}</a></li>)
        }
        pages.push(<li ><a className="page-link" tabindex="-1" aria-disabled="true" onClick={() => handleNextOrPrev('+')}>Next</a></li>)
        return pages;
    }
    return (
        <div className='paginator'>
            <nav aria-label="Page navigation example">
            <ul class="pagination">
                {
                 getPages()   
                }
            </ul>
            </nav>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
      setActivePage: (active) => dispatch(setActivePage(active)),
    }
  }
  const mapStateToProps = (state) => {
    return {
      current_page : state.Paginator.current_page
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Paginator);

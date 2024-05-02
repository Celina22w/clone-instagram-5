import './ConteudoCentral.css';
import Stories from './Stories';
import Feed from './Feed';

export default function conteudoCentral () {
    return(
        <>
        <Stories />

        
        <div className='ConteudoCentral'>
            <Stories />
            <div className="Feed">
                O Conteúdo do Feed virá aqui
            </div>
        </div>
        
        
        
        </>
    )
}
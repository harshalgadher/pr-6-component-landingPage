import Accordion from 'react-bootstrap/Accordion';

export const FrequentlyQue = () => {
    return (
        <div className="py-120 bg-main">
            <div className="container">
                <div className="row">
                    <div className="section-text text-center">
                        <h2 className="text-white display-4 fw-bold">Frequently Asked <br /> Questions</h2>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-8">
                        <div className="acc-bg" style={{ backgroundColor: '#f5f5f5', borderRadius: '10px', padding: '20px' }}>
                            <Accordion defaultActiveKey="0" >
                                <Accordion.Item eventKey="0" style={{ backgroundColor: '#313144',fontSize: '20px',color:'white', borderRadius: '8px', marginBottom: '10px',border:'none' }}>
                                    <Accordion.Header>What is Dooplo?</Accordion.Header>
                                    <Accordion.Body>
                                       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" style={{ backgroundColor: '#313144',fontSize: '20px',color:'white', borderRadius: '8px', marginBottom: '10px',border:'none' }}>
                                    <Accordion.Header>Is it free to sign up?</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" style={{ backgroundColor: '#313144',fontSize: '20px',color:'white', borderRadius: '8px', marginBottom: '10px',border:'none' }}>
                                    <Accordion.Header>Can i create more than one account</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" style={{ backgroundColor: '#313144',fontSize: '20px',color:'white', borderRadius: '8px', marginBottom: '10px',border:'none' }}>
                                    <Accordion.Header>How old Must i be?</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" style={{ backgroundColor: '#313144',fontSize: '20px',color:'white', borderRadius: '8px', marginBottom: '10px',border:'none' }}>
                                    <Accordion.Header>is Dooplo legal?</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

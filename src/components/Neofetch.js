import React from 'react';
import styled from 'styled-components';
import fotoperfil from './../assets/profile.png';

const NeofetchOutputContainer = styled.div`
	display: flex;
`;

const NeofetchList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0 0 0 0.5rem;
	margin-left: 65px;
`;

const Destaque = styled.span`
	color: #a31c17;
`;

const Block = styled.div`
	background: ${props => props.color};
	display: inline-block;
	height: calc(9px + 0.25vw);
	margin-top: 0.5rem;
	width: 10px;

	&:first-of-type {
		margin-left: 1rem;
	}
`;

const Foto = styled.div`
	margin-top: 35px;
`;

const Neofetch = () => {
	const colors = ['red', 'green', 'yellow', 'blue', 'rebeccapurple', 'Destaque', 'grey'];

	return (
		<>
			<NeofetchOutputContainer >
				<Foto><img className='fotoperfil' src={fotoperfil} alt='Sou eu! Ou quase...' /></Foto>
				<NeofetchList >
						<li key="uniqueId1"><Destaque>diego</Destaque>@<Destaque>dev</Destaque></li>
						<li key="uniqueId2">-----------------</li>
						<li key="uniqueId3"><Destaque>OS</Destaque>: CaféOS</li>
						<li key="uniqueId4"><Destaque>Host</Destaque>: Fortaleza - CE</li>
						<li key="uniqueId5"><Destaque>Kernel</Destaque>: 3.0</li>
						<li key="uniqueId6"><Destaque>Uptime</Destaque>: Over 9000</li>
						<li key="uniqueId7"><Destaque>Packages</Destaque>: 25</li>
						<li key="uniqueId8"><Destaque>Shell</Destaque>: bash 5.2.21</li>
						<li key="uniqueId9"><Destaque>Resolution</Destaque>: 1920x1080</li>
						<li key="uniqueId10"><Destaque>Terminal</Destaque>: Terminator</li>
						<li key="uniqueId11"><Destaque>CPU</Destaque>: Brain i9</li>
						<li key="uniqueId12"><Destaque>GPU</Destaque>: Eyes 4090</li>
						<li key="uniqueId13"><Destaque>Memory</Destaque>: 30,720 MiB / 122,880 MiB</li>
						<li key="uniqueId14" className='margincolors'>{colors.map((color, index) => <Block key={`color-${index}`} color={color} />)}</li>
				</NeofetchList>
			</NeofetchOutputContainer>
			<div className='resposta'>
				<span>Olá, Me chamo Diego Gomes.</span><br />
				<span>Esse é um terminal com um pouco sobre mim e projetos!</span><br />
				<span>Para começar a interagir digite '<span className='destaque'>ajuda</span>' para a lista de comandos.</span>
			</div>
		</>
	);
};

export default Neofetch;

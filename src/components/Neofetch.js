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
	color: #F2613F;
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
	margin-top: 50px;
`;

const Neofetch = () => {
	const colors = ['red', 'green', 'yellow', 'blue', 'rebeccapurple', 'Destaque', 'grey'];

	return (
		<>
			<NeofetchOutputContainer>
				<Foto><img className='fotoperfil' src={fotoperfil} alt='Sou eu! Ou quase...' /></Foto>
				<NeofetchList>
					<li><Destaque>diego</Destaque>@<Destaque>dev</Destaque></li>
					<li>-----------------</li>
					<li><Destaque>OS</Destaque>: CaféOS</li>
					<li><Destaque>Host</Destaque>: Fortaleza - CE</li>
					<li><Destaque>Kernel</Destaque>: 3.0</li>
					<li><Destaque>Uptime</Destaque>: Over 9000</li>
					<li><Destaque>Packages</Destaque>: 25</li>
					<li><Destaque>Shell</Destaque>: bash 5.2.21</li>
					<li><Destaque>Resolution</Destaque>: 1920x1080</li>
					<li><Destaque>Terminal</Destaque>: Terminator</li>
					<li><Destaque>CPU</Destaque>: Brain i9</li>
					<li><Destaque>GPU</Destaque>: Eyes 4090</li>
					<li><Destaque>Memory</Destaque>: 30,720 MiB / 122,880 MiB</li>
					<li className='margincolors'>{colors.map(color => <Block color={color} />)}</li>
				</NeofetchList>
			</NeofetchOutputContainer>
			<div className='resposta'>
				<span>Olá, Me chamo Diego Gomes.</span><br />
				<span>Este é meu site com um pouco sobre mim e projetos!</span><br />
				<span>Para começar a interagir digite '<span class='destaque'>ajuda</span>' para a lista de comandos.</span>
			</div>
		</>
	);
};

export default Neofetch;

import React, { Component } from 'react';
import Roll from './Roll';

class Npc extends Component {
    render() {
        const { npc } = this.props;
        
        return (
            <div className="npc-stats">
                <h4>{npc.type}</h4>
                <p>
                    <em>{npc.description}</em>
                </p>
                <hr />
                <ul>
                    <li><strong>Armor Class</strong> {npc.ac}</li>
                    <li>
                        <strong>Hit Points</strong> <Roll hp={npc.hp} />
                    </li>
                    <li><strong>Speed</strong> {npc.speed}ft.</li>
                </ul>
                <hr />
                <table className="statistics">
                    <thead>
                        <tr>
                            <th>STR</th>
                            <th>DEX</th>
                            <th>CON</th>
                            <th>INT</th>
                            <th>WIS</th>
                            <th>CHA</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{npc.skills.str.score} ({npc.skills.str.modifier})</td>
                            <td>{npc.skills.dex.score} ({npc.skills.dex.modifier})</td>
                            <td>{npc.skills.con.score} ({npc.skills.con.modifier})</td>
                            <td>{npc.skills.int.score} ({npc.skills.int.modifier})</td>
                            <td>{npc.skills.wis.score} ({npc.skills.wis.modifier})</td>
                            <td>{npc.skills.cha.score} ({npc.skills.str.modifier})</td>
                        </tr>
                    </tbody>
                </table>
                <hr />
                <ul>
                    <li>
                        <strong>Senses:</strong>
                        <ul>
                        {npc.senses.map(
                            function(sense, index){
                                return <li key={index}>{sense.description}</li>;
                            }
                        )}
                        </ul>
                    </li>
                    <li>
                        <strong>Languages:</strong>
                        <ul>
                        {npc.languages.map(
                            function(language, index){
                                return <li key={index}>{language.description}</li>;
                            }
                        )}
                        </ul>
                    </li>
                    <li><strong>Challenge:</strong> {npc.challenge.cr} ({npc.challenge.xp} XP)</li>
                </ul>
                <hr />
                <h3 id="actions">Actions</h3>
                <p>
                    <em>Melee Weapon Attack:</em>
                    <ul>
                    {npc.actions.melee.map(
                        function(action, index){
                            return <li key={index}>{action.description}, Attack: {action.toHit} to hit. Hit <Roll hp={action.hit} /></li>;
                        }
                    )}
                    </ul>
                </p>
                <p>
                    <em>Range Weapon Attack:</em>
                    <ul>
                    {npc.actions.range.map(
                        function(action, index){
                            return <li key={index}>{action.description}, Attack: {action.toHit} to hit. Hit <Roll hp={action.hit} /></li>;
                        }
                    )}
                    </ul>
                </p>
            </div>
        );
    }
}

export default Npc;
